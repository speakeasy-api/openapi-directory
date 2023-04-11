import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum AzureSubscriptionListForUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AzureSubscriptionListForUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: AzureSubscriptionListForUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * BadRequest
 */
export declare class AzureSubscriptionListForUserDefaultApplicationJSON extends SpeakeasyBase {
    error: AzureSubscriptionListForUserDefaultApplicationJSONError;
}
export declare class AzureSubscriptionListForUser200ApplicationJSON extends SpeakeasyBase {
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
export declare class AzureSubscriptionListForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    azureSubscriptionListForUser200ApplicationJSONObjects?: AzureSubscriptionListForUser200ApplicationJSON[];
    /**
     * BadRequest
     */
    azureSubscriptionListForUserDefaultApplicationJSONObject?: AzureSubscriptionListForUserDefaultApplicationJSON;
}
