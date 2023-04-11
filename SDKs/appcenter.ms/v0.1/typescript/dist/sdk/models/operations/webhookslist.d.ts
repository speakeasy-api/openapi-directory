import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebhooksListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class WebhooksListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * The status code return by the API. It can be 400 or 404 or 409 or 500.
 */
export declare enum WebhooksListDefaultApplicationJSONCodeEnum {
    FourHundred = "400",
    FourHundredAndFour = "404",
    FourHundredAndNine = "409",
    FiveHundred = "500"
}
/**
 * Generic result for any alerting API operation
 */
export declare class WebhooksListDefaultApplicationJSON extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 404 or 409 or 500.
     */
    code: WebhooksListDefaultApplicationJSONCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
    /**
     * Unique request identifier for tracking
     */
    requestId: string;
}
/**
 * Alerting EventTypes enum
 */
export declare enum WebhooksList200ApplicationJSONValuesEventTypesEnum {
    NewCrashGroupCreated = "newCrashGroupCreated",
    NewAppReleased = "newAppReleased"
}
/**
 * Alerting webhook
 */
export declare class WebhooksList200ApplicationJSONValues extends SpeakeasyBase {
    /**
     * Allows eanble/disable webhook
     */
    enabled?: boolean;
    /**
     * Event types enabled for webhook
     */
    eventTypes: WebhooksList200ApplicationJSONValuesEventTypesEnum[];
    /**
     * The unique id (UUID) of the webhook
     */
    id?: string;
    /**
     * display name of the webhook
     */
    name: string;
    /**
     * target url of the webhook
     */
    url: string;
}
/**
 * List of alerting webhooks wrapped as operation result
 */
export declare class WebhooksList200ApplicationJSON extends SpeakeasyBase {
    values: WebhooksList200ApplicationJSONValues[];
}
export declare class WebhooksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    webhooksList200ApplicationJSONObject?: WebhooksList200ApplicationJSON;
    /**
     * Error code with reason
     */
    webhooksListDefaultApplicationJSONObject?: WebhooksListDefaultApplicationJSON;
}
