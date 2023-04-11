import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of an AWS Lambda function finding aggregation.
 */
export declare class LambdaFunctionAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    functionName?: string;
    lambdaTags?: Record<string, string>;
    lastModifiedAt?: Date;
    resourceId: string;
    runtime?: string;
    /**
     * An object that contains the counts of aggregated finding per severity.
     */
    severityCounts?: SeverityCounts;
}
