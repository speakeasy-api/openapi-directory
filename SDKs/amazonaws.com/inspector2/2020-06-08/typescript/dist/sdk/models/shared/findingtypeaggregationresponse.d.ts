import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of a finding type aggregation.
 */
export declare class FindingTypeAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    severityCounts?: SeverityCounts;
}
