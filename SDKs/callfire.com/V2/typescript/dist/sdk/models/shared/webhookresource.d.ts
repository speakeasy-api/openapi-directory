import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WebhookResource describes a resource and a list of supported events, once event is triggered CallFire performs an HTTP POST request to a client's endpoint
 */
export declare class WebhookResource extends SpeakeasyBase {
    /**
     * A name of a webhook resource (ex: InboundCall, OutboundCall, InboundText, OutboundText, CallBroadcast, TextBroadcast, etc...)
     */
    resource?: string;
    /**
     * A list of event names which are supported by webhook resource (ex: Started, Stopped, Finished, etc.)
     */
    supportedEvents?: string[];
}
