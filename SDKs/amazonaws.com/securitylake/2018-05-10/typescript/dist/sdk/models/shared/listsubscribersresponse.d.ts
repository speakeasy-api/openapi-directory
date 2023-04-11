import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriberResource } from "./subscriberresource";
/**
 * Success
 */
export declare class ListSubscribersResponse extends SpeakeasyBase {
    nextToken?: string;
    subscribers: SubscriberResource[];
}
