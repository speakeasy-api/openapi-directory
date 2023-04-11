import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains details on the results of a finding aggregation by title.
 */
export declare class TitleAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    severityCounts?: SeverityCounts;
    title: string;
    vulnerabilityId?: string;
}
