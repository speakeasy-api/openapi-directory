import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGetRetentionSettingsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGetRetentionSettingsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsGetRetentionSettingsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGetRetentionSettingsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGetRetentionSettingsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason.
 */
export declare class ErrorsGetRetentionSettingsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGetRetentionSettingsDefaultApplicationJSONError;
}
export declare enum ErrorsGetRetentionSettings200ApplicationJSONRetentionInDaysEnum {
    TwentyEight = "28"
}
/**
 * Success
 */
export declare class ErrorsGetRetentionSettings200ApplicationJSON extends SpeakeasyBase {
    retentionInDays: ErrorsGetRetentionSettings200ApplicationJSONRetentionInDaysEnum;
}
export declare class ErrorsGetRetentionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    errorsGetRetentionSettings200ApplicationJSONObject?: ErrorsGetRetentionSettings200ApplicationJSON;
    /**
     * Error code with reason.
     */
    errorsGetRetentionSettingsDefaultApplicationJSONObject?: ErrorsGetRetentionSettingsDefaultApplicationJSON;
}
