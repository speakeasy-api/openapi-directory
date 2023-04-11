import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The user's role
 */
export declare enum AppInvitationsCreateRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
/**
 * The email of the user to invite
 */
export declare class AppInvitationsCreateRequestBody extends SpeakeasyBase {
    /**
     * The user's role
     */
    role?: AppInvitationsCreateRequestBodyRoleEnum;
    /**
     * The user's email address
     */
    userEmail: string;
}
export declare class AppInvitationsCreateRequest extends SpeakeasyBase {
    /**
     * The email of the user to invite
     */
    requestBody?: AppInvitationsCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppInvitationsCreateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsCreateDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsCreateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsCreateDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsCreateDefaultApplicationJSONError;
}
export declare class AppInvitationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsCreateDefaultApplicationJSONObject?: AppInvitationsCreateDefaultApplicationJSON;
}
