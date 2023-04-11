import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionFilter } from "./subscriptionfilter";
/**
 * Success
 */
export declare class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
    subscriptionFilters?: SubscriptionFilter[];
}
