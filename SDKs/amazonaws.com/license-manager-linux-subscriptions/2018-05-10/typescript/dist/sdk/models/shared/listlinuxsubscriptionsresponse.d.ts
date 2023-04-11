import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Success
 */
export declare class ListLinuxSubscriptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    subscriptions?: Subscription[];
}
