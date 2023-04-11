import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsListTestersSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsListTestersRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppsListTestersDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsListTestersDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsListTestersDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsListTestersDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsListTestersDefaultApplicationJSONError;
}
/**
 * The creation origin of this user
 */
export declare enum AppsListTesters200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
export declare enum AppsListTesters200ApplicationJSONPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
export declare class AppsListTesters200ApplicationJSON extends SpeakeasyBase {
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
    origin: AppsListTesters200ApplicationJSONOriginEnum;
    /**
     * The permissions the user has for the app
     */
    permissions?: AppsListTesters200ApplicationJSONPermissionsEnum[];
}
export declare class AppsListTestersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsListTesters200ApplicationJSONObjects?: AppsListTesters200ApplicationJSON[];
    /**
     * Error
     */
    appsListTestersDefaultApplicationJSONObject?: AppsListTestersDefaultApplicationJSON;
}
