import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";
/**
 * Data returned by the <b>DescribeEventSubscriptions</b> action.
**/
export declare class EventSubscriptionsMessage extends SpeakeasyBase {
    eventSubscriptionsList?: EventSubscriptionsList[];
    marker?: string;
}
