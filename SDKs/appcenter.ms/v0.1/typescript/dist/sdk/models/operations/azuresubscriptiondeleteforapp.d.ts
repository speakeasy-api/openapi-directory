import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AzureSubscriptionDeleteForAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AzureSubscriptionDeleteForAppRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The unique ID (UUID) of the azure subscription
     */
    azureSubscriptionId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AzureSubscriptionDeleteForAppDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AzureSubscriptionDeleteForAppDefaultApplicationJSONError extends SpeakeasyBase {
    code: AzureSubscriptionDeleteForAppDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AzureSubscriptionDeleteForAppDefaultApplicationJSON extends SpeakeasyBase {
    error: AzureSubscriptionDeleteForAppDefaultApplicationJSONError;
}
export declare class AzureSubscriptionDeleteForAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    azureSubscriptionDeleteForAppDefaultApplicationJSONObject?: AzureSubscriptionDeleteForAppDefaultApplicationJSON;
}
