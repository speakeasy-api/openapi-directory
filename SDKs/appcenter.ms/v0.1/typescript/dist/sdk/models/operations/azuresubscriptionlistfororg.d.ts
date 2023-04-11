import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AzureSubscriptionListForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AzureSubscriptionListForOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum AzureSubscriptionListForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AzureSubscriptionListForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: AzureSubscriptionListForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AzureSubscriptionListForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: AzureSubscriptionListForOrgDefaultApplicationJSONError;
}
export declare class AzureSubscriptionListForOrg200ApplicationJSON extends SpeakeasyBase {
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
export declare class AzureSubscriptionListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    azureSubscriptionListForOrg200ApplicationJSONObjects?: AzureSubscriptionListForOrg200ApplicationJSON[];
    /**
     * Error
     */
    azureSubscriptionListForOrgDefaultApplicationJSONObject?: AzureSubscriptionListForOrgDefaultApplicationJSON;
}
