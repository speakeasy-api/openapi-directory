import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsAcceptSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrgInvitationsAcceptRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The app invitation token that was sent to the user
     */
    invitationToken: string;
}
export declare enum OrgInvitationsAcceptDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsAcceptDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsAcceptDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsAcceptDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsAcceptDefaultApplicationJSONError;
}
export declare class OrgInvitationsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsAcceptDefaultApplicationJSONObject?: OrgInvitationsAcceptDefaultApplicationJSON;
}
