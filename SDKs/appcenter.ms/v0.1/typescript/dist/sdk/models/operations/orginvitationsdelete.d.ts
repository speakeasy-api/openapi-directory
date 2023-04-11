import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The email of the user whose invitation should be removed
 */
export declare class OrgInvitationsDeleteRequestBody extends SpeakeasyBase {
    /**
     * The user's email address
     */
    userEmail: string;
}
export declare class OrgInvitationsDeleteRequest extends SpeakeasyBase {
    /**
     * The email of the user whose invitation should be removed
     */
    requestBody: OrgInvitationsDeleteRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsDeleteDefaultApplicationJSONError;
}
export declare class OrgInvitationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsDeleteDefaultApplicationJSONObject?: OrgInvitationsDeleteDefaultApplicationJSON;
}
