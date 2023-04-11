import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsUpdatePermissionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer"
}
/**
 * The value to update the user permission in the invite.
 */
export declare class AppInvitationsUpdatePermissionsRequestBody extends SpeakeasyBase {
    /**
     * The permissions the user has for the app in the invitation
     */
    permissions: AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum[];
}
export declare class AppInvitationsUpdatePermissionsRequest extends SpeakeasyBase {
    /**
     * The value to update the user permission in the invite.
     */
    requestBody: AppInvitationsUpdatePermissionsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The email of the user to invite
     */
    userEmail: string;
}
export declare enum AppInvitationsUpdatePermissionsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsUpdatePermissionsDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsUpdatePermissionsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsUpdatePermissionsDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsUpdatePermissionsDefaultApplicationJSONError;
}
export declare class AppInvitationsUpdatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsUpdatePermissionsDefaultApplicationJSONObject?: AppInvitationsUpdatePermissionsDefaultApplicationJSON;
}
