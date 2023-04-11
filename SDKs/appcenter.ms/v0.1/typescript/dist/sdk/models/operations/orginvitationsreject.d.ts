import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsRejectSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrgInvitationsRejectRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The app invitation token that was sent to the user
     */
    invitationToken: string;
}
export declare enum OrgInvitationsRejectDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsRejectDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsRejectDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsRejectDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsRejectDefaultApplicationJSONError;
}
export declare class OrgInvitationsRejectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsRejectDefaultApplicationJSONObject?: OrgInvitationsRejectDefaultApplicationJSON;
}
