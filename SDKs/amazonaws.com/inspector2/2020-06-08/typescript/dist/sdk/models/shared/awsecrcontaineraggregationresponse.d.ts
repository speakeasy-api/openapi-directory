import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * An aggregation of information about Amazon ECR containers.
 */
export declare class AwsEcrContainerAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    architecture?: string;
    imageSha?: string;
    imageTags?: string[];
    repository?: string;
    resourceId: string;
    severityCounts?: SeverityCounts;
}
