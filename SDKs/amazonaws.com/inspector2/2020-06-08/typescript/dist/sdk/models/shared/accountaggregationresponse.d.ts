import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * An aggregation of findings by Amazon Web Services account ID.
 */
export declare class AccountAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    severityCounts?: SeverityCounts;
}
