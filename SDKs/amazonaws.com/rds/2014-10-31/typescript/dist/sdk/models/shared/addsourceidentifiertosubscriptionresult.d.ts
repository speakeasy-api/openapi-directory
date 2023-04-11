import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * Success
 */
export declare class AddSourceIdentifierToSubscriptionResult extends SpeakeasyBase {
    /**
     * Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.
     */
    eventSubscription?: EventSubscription;
}
