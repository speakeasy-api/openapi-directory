import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Success
 */
export declare class ListEventSubscriptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    subscriptions: Subscription[];
}
