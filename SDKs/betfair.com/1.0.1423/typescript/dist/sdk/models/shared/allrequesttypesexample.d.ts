import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMessage } from "./authenticationmessage";
import { HeartbeatMessage } from "./heartbeatmessage";
import { MarketSubscriptionMessage } from "./marketsubscriptionmessage";
import { OrderSubscriptionMessage } from "./ordersubscriptionmessage";
export declare enum AllRequestTypesExampleOpTypesEnum {
    Heartbeat = "heartbeat",
    Authentication = "authentication",
    MarketSubscription = "marketSubscription",
    OrderSubscription = "orderSubscription"
}
/**
 * Requests are sent to socket
 */
export declare class AllRequestTypesExample extends SpeakeasyBase {
    authentication?: AuthenticationMessage;
    heartbeat?: HeartbeatMessage;
    marketSubscription?: MarketSubscriptionMessage;
    opTypes?: AllRequestTypesExampleOpTypesEnum;
    orderSubscriptionMessage?: OrderSubscriptionMessage;
}
