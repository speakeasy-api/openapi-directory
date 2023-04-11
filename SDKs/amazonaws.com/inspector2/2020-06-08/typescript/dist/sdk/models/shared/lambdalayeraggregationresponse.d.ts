import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of an AWS Lambda function layer finding aggregation.
 */
export declare class LambdaLayerAggregationResponse extends SpeakeasyBase {
    accountId: string;
    functionName: string;
    layerArn: string;
    resourceId: string;
    /**
     * An object that contains the counts of aggregated finding per severity.
     */
    severityCounts?: SeverityCounts;
}
