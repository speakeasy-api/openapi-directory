import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsRemoveUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsRemoveUserRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The user email of the user to delete
     */
    userEmail: string;
}
export declare enum AppsRemoveUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsRemoveUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsRemoveUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * BadRequest
 */
export declare class AppsRemoveUserDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsRemoveUserDefaultApplicationJSONError;
}
export declare class AppsRemoveUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * BadRequest
     */
    appsRemoveUserDefaultApplicationJSONObject?: AppsRemoveUserDefaultApplicationJSON;
}
