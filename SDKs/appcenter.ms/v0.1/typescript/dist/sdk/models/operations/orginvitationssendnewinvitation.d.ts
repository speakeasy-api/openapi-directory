import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsSendNewInvitationSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The role of the user to be added
 */
export declare enum OrgInvitationsSendNewInvitationRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
/**
 * The role of the user to be added
 */
export declare class OrgInvitationsSendNewInvitationRequestBody extends SpeakeasyBase {
    /**
     * The role of the user to be added
     */
    role?: OrgInvitationsSendNewInvitationRequestBodyRoleEnum;
}
export declare class OrgInvitationsSendNewInvitationRequest extends SpeakeasyBase {
    /**
     * The role of the user to be added
     */
    requestBody?: OrgInvitationsSendNewInvitationRequestBody;
    /**
     * The email address of the user to send the password reset mail to.
     */
    email: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsSendNewInvitationDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsSendNewInvitationDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsSendNewInvitationDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsSendNewInvitationDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsSendNewInvitationDefaultApplicationJSONError;
}
export declare class OrgInvitationsSendNewInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsSendNewInvitationDefaultApplicationJSONObject?: OrgInvitationsSendNewInvitationDefaultApplicationJSON;
}
