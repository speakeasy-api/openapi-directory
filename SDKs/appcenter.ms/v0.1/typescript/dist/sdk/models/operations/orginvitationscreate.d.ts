import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The user's role
 */
export declare enum OrgInvitationsCreateRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
/**
 * The email of the user to invite
 */
export declare class OrgInvitationsCreateRequestBody extends SpeakeasyBase {
    /**
     * The user's role
     */
    role?: OrgInvitationsCreateRequestBodyRoleEnum;
    /**
     * The user's email address
     */
    userEmail: string;
}
export declare class OrgInvitationsCreateRequest extends SpeakeasyBase {
    /**
     * The email of the user to invite
     */
    requestBody: OrgInvitationsCreateRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsCreateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsCreateDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsCreateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsCreateDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsCreateDefaultApplicationJSONError;
}
export declare class OrgInvitationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsCreateDefaultApplicationJSONObject?: OrgInvitationsCreateDefaultApplicationJSON;
}
