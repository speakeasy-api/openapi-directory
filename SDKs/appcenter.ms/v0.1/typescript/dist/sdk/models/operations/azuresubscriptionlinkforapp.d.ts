import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AzureSubscriptionLinkForAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The azure subscription data needed to be link to the app.
 */
export declare class AzureSubscriptionLinkForAppRequestBody extends SpeakeasyBase {
    /**
     * The azure subscription id
     */
    subscriptionId: string;
}
export declare class AzureSubscriptionLinkForAppRequest extends SpeakeasyBase {
    /**
     * The azure subscription data needed to be link to the app.
     */
    requestBody: AzureSubscriptionLinkForAppRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AzureSubscriptionLinkForAppDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AzureSubscriptionLinkForAppDefaultApplicationJSONError extends SpeakeasyBase {
    code: AzureSubscriptionLinkForAppDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AzureSubscriptionLinkForAppDefaultApplicationJSON extends SpeakeasyBase {
    error: AzureSubscriptionLinkForAppDefaultApplicationJSONError;
}
export declare class AzureSubscriptionLinkForAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    azureSubscriptionLinkForAppDefaultApplicationJSONObject?: AzureSubscriptionLinkForAppDefaultApplicationJSON;
}
