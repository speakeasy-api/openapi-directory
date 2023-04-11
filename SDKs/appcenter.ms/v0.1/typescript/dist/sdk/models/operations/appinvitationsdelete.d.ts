import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppInvitationsDeleteRequest extends SpeakeasyBase {
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
export declare enum AppInvitationsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsDeleteDefaultApplicationJSONError;
}
export declare class AppInvitationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsDeleteDefaultApplicationJSONObject?: AppInvitationsDeleteDefaultApplicationJSON;
}
