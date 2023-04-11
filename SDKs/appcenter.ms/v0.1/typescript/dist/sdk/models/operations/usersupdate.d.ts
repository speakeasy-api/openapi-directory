import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The data for the created user
 */
export declare class UsersUpdateRequestBody extends SpeakeasyBase {
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName?: string;
}
export declare enum UsersUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersUpdateDefaultApplicationJSONError;
}
/**
 * The creation origin of this user
 */
export declare enum UsersUpdate200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
export declare enum UsersUpdate200ApplicationJSONPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * Success
 */
export declare class UsersUpdate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The avatar URL of the user
     */
    avatarUrl?: string;
    /**
     * User is required to send an old password in order to change the password.
     */
    canChangePassword?: boolean;
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName: string;
    /**
     * The email address of the user
     */
    email: string;
    /**
     * The unique id (UUID) of the user
     */
    id: string;
    /**
     * The unique name that is used to identify the user.
     */
    name: string;
    /**
     * The creation origin of this user
     */
    origin: UsersUpdate200ApplicationJSONOriginEnum;
    /**
     * The permissions the user has for the app
     */
    permissions?: UsersUpdate200ApplicationJSONPermissionsEnum[];
}
export declare class UsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersUpdate200ApplicationJSONObject?: UsersUpdate200ApplicationJSON;
    /**
     * Error
     */
    usersUpdateDefaultApplicationJSONObject?: UsersUpdateDefaultApplicationJSON;
}
