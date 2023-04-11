import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of a finding aggregation by AMI.
 */
export declare class AmiAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    affectedInstances?: number;
    ami: string;
    severityCounts?: SeverityCounts;
}
