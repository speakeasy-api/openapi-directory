import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsErrorLocationRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsErrorLocationDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorLocationDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorLocationDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorLocationDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorLocationDefaultApplicationJSONError;
}
/**
 * Error location.
 */
export declare class ErrorsErrorLocation200ApplicationJSON extends SpeakeasyBase {
    uri?: string;
}
export declare class ErrorsErrorLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error location.
     */
    errorsErrorLocation200ApplicationJSONObject?: ErrorsErrorLocation200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsErrorLocationDefaultApplicationJSONObject?: ErrorsErrorLocationDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
