import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * This type is used by the response payload for the <b>getSubscription</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getSubscription</b>, so all of the pagination-related fields are for future use.</span>
 */
export declare class SubscriptionResponse extends SpeakeasyBase {
    /**
     * This field is for future use.
     */
    href?: string;
    /**
     * This field is for future use.
     */
    limit?: number;
    /**
     * This field is for future use.
     */
    next?: string;
    /**
     * An array of subscriptions associated with the seller account.
     */
    subscriptions?: Subscription[];
    /**
     * The total number of subscriptions displayed on the current page of results.
     */
    total?: number;
}
