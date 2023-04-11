import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * Success
 */
export declare class RemoveSourceIdentifierFromSubscriptionResult extends SpeakeasyBase {
    /**
     * Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.
     */
    eventSubscription?: EventSubscription;
}
