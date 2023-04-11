import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AzureSubscriptionListForAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AzureSubscriptionListForAppRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AzureSubscriptionListForAppDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AzureSubscriptionListForAppDefaultApplicationJSONError extends SpeakeasyBase {
    code: AzureSubscriptionListForAppDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AzureSubscriptionListForAppDefaultApplicationJSON extends SpeakeasyBase {
    error: AzureSubscriptionListForAppDefaultApplicationJSONError;
}
export declare class AzureSubscriptionListForApp200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the subscription can be used for billing
     */
    isBillable?: boolean;
    /**
     * If the subscription is used for billing
     */
    isBilling?: boolean;
    /**
     * If the subscription is internal Microsoft subscription
     */
    isMicrosoftInternal?: boolean;
    /**
     * The azure subscription id
     */
    subscriptionId: string;
    /**
     * The name of the azure subscription
     */
    subscriptionName: string;
    /**
     * The tenant id of the azure subscription belongs to
     */
    tenantId: string;
}
export declare class AzureSubscriptionListForAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    azureSubscriptionListForApp200ApplicationJSONObjects?: AzureSubscriptionListForApp200ApplicationJSON[];
    /**
     * Error
     */
    azureSubscriptionListForAppDefaultApplicationJSONObject?: AzureSubscriptionListForAppDefaultApplicationJSON;
}
