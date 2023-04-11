import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsDeleteRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsDeleteDefaultApplicationJSONError;
}
export declare class AppsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appsDeleteDefaultApplicationJSONObject?: AppsDeleteDefaultApplicationJSON;
}
