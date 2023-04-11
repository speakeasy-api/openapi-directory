import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Webhook is a user-defined callback, which can be maintained via API. CallFire will send POST request to a client's endpoint defined in webhook once one of assigned events is triggered. See [webhooks guide](https://developers.callfire.com/webhooks-guide.html) for more information about CallFire Webhooks API.
 */
export declare class WebhookInput extends SpeakeasyBase {
    /**
     * URL that webhook will send POST to on resource event trigger
     */
    callback?: string;
    /**
     * A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
     */
    enabled?: boolean;
    /**
     * Comma separated list of events on resource that will trigger callbacks (ex: STARTED, STOPPED, FINISHED, etc...).
     */
    events?: string[];
    /**
     * ~
     */
    expiresAt?: number;
    /**
     * A limit callback response to a particular fields
     */
    fields?: string;
    /**
     * An id of a webhook
     */
    id?: number;
    /**
     * A name of a webhook
     */
    name?: string;
    /**
     * A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
     */
    nonStrictSsl?: boolean;
    /**
     * A resource name that webhook is watching events on. Use GET /webhooks/resources to determine resources and events available (ex: InboundCall, OutboundCall, InboundText, OutboundText, CallBroadcast, TextBroadcast, etc...)
     */
    resource?: string;
    /**
     * Webhook secret token which is used as a signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)
     */
    secret?: string;
    /**
     * If true is set then webhook triggers only once. Afterwards the webhook will be deleted
     */
    singleUse?: boolean;
}
/**
 * Webhook is a user-defined callback, which can be maintained via API. CallFire will send POST request to a client's endpoint defined in webhook once one of assigned events is triggered. See [webhooks guide](https://developers.callfire.com/webhooks-guide.html) for more information about CallFire Webhooks API.
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * URL that webhook will send POST to on resource event trigger
     */
    callback?: string;
    /**
     * A time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    createdAt?: number;
    /**
     * A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
     */
    enabled?: boolean;
    /**
     * Comma separated list of events on resource that will trigger callbacks (ex: STARTED, STOPPED, FINISHED, etc...).
     */
    events?: string[];
    /**
     * ~
     */
    expiresAt?: number;
    /**
     * A limit callback response to a particular fields
     */
    fields?: string;
    /**
     * An id of a webhook
     */
    id?: number;
    /**
     * A name of a webhook
     */
    name?: string;
    /**
     * A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
     */
    nonStrictSsl?: boolean;
    /**
     * A resource name that webhook is watching events on. Use GET /webhooks/resources to determine resources and events available (ex: InboundCall, OutboundCall, InboundText, OutboundText, CallBroadcast, TextBroadcast, etc...)
     */
    resource?: string;
    /**
     * Webhook secret token which is used as a signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)
     */
    secret?: string;
    /**
     * If true is set then webhook triggers only once. Afterwards the webhook will be deleted
     */
    singleUse?: boolean;
    /**
     * A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    updatedAt?: number;
}
