import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the subscription is managed in the downstream.
 */
export declare enum WebhookSupportManagedViaEnum {
    Manual = "manual",
    Api = "api"
}
/**
 * Mode of the webhook support.
 */
export declare enum WebhookSupportModeEnum {
    Native = "native",
    Virtual = "virtual",
    None = "none"
}
/**
 * Received events are scoped to connection or across integration.
 */
export declare enum WebhookSupportSubscriptionLevelEnum {
    Connection = "connection",
    Integration = "integration"
}
/**
 * The window unit for the rate.
 */
export declare enum WebhookSupportVirtualWebhooksRequestRateUnitEnum {
    Second = "second",
    Minute = "minute",
    Hour = "hour",
    Day = "day"
}
/**
 * The rate at which requests for resources will be made to downstream.
 */
export declare class WebhookSupportVirtualWebhooksRequestRate extends SpeakeasyBase {
    /**
     * The number of requests per window unit.
     */
    rate: number;
    /**
     * Size of request window.
     */
    size: number;
    /**
     * The window unit for the rate.
     */
    unit: WebhookSupportVirtualWebhooksRequestRateUnitEnum;
}
/**
 * Virtual webhook config for the connector.
 */
export declare class WebhookSupportVirtualWebhooks extends SpeakeasyBase {
    /**
     * The rate at which requests for resources will be made to downstream.
     */
    requestRate: WebhookSupportVirtualWebhooksRequestRate;
    /**
     * The resources that will be requested from downstream.
     */
    resources?: Record<string, any>;
}
/**
 * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
 */
export declare class WebhookSupport extends SpeakeasyBase {
    /**
     * How the subscription is managed in the downstream.
     */
    managedVia?: WebhookSupportManagedViaEnum;
    /**
     * Mode of the webhook support.
     */
    mode?: WebhookSupportModeEnum;
    /**
     * Received events are scoped to connection or across integration.
     */
    subscriptionLevel?: WebhookSupportSubscriptionLevelEnum;
    /**
     * Virtual webhook config for the connector.
     */
    virtualWebhooks?: WebhookSupportVirtualWebhooks;
}
