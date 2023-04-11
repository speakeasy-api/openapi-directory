import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating subscriptions
 */
export declare class UpdateSubscriptionsBulkRequest extends SpeakeasyBase {
    /**
     * Creates or deletes a subscription on each item in an array of objects.
     */
    isSubscribed: boolean;
    /**
     * List of ids
     */
    objectIds: number[];
}
