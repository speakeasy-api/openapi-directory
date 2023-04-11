import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UsersGetDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersGetDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersGetDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersGetDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersGetDefaultApplicationJSONError;
}
/**
 * The creation origin of this user
 */
export declare enum UsersGet200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
export declare enum UsersGet200ApplicationJSONPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * Success
 */
export declare class UsersGet200ApplicationJSON extends SpeakeasyBase {
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
    origin: UsersGet200ApplicationJSONOriginEnum;
    /**
     * The permissions the user has for the app
     */
    permissions?: UsersGet200ApplicationJSONPermissionsEnum[];
}
export declare class UsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersGet200ApplicationJSONObject?: UsersGet200ApplicationJSON;
    /**
     * Error
     */
    usersGetDefaultApplicationJSONObject?: UsersGetDefaultApplicationJSON;
}
