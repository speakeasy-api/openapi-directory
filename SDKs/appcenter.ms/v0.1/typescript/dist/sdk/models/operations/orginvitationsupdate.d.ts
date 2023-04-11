import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The user's role in the organizatiion
 */
export declare enum OrgInvitationsUpdateRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
/**
 * The new role of the user
 */
export declare class OrgInvitationsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The user's role in the organizatiion
     */
    role?: OrgInvitationsUpdateRequestBodyRoleEnum;
}
export declare class OrgInvitationsUpdateRequest extends SpeakeasyBase {
    /**
     * The new role of the user
     */
    requestBody: OrgInvitationsUpdateRequestBody;
    /**
     * The email address of the user to send the password reset mail to.
     */
    email: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsUpdateDefaultApplicationJSONError;
}
export declare class OrgInvitationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsUpdateDefaultApplicationJSONObject?: OrgInvitationsUpdateDefaultApplicationJSON;
}
