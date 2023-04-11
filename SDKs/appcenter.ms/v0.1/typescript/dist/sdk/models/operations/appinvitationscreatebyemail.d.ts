import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsCreateByEmailSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The role of the user to be added
 */
export declare enum AppInvitationsCreateByEmailRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
/**
 * The role of the user to be added
 */
export declare class AppInvitationsCreateByEmailRequestBody extends SpeakeasyBase {
    /**
     * The role of the user to be added
     */
    role?: AppInvitationsCreateByEmailRequestBodyRoleEnum;
}
export declare class AppInvitationsCreateByEmailRequest extends SpeakeasyBase {
    /**
     * The role of the user to be added
     */
    requestBody?: AppInvitationsCreateByEmailRequestBody;
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
export declare enum AppInvitationsCreateByEmailDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsCreateByEmailDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsCreateByEmailDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsCreateByEmailDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsCreateByEmailDefaultApplicationJSONError;
}
export declare class AppInvitationsCreateByEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsCreateByEmailDefaultApplicationJSONObject?: AppInvitationsCreateByEmailDefaultApplicationJSON;
}
