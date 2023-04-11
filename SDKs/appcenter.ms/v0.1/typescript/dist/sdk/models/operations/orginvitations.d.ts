import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrgInvitationsRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The email address of the user to send the password reset mail to.
     */
    email: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsDefaultApplicationJSONError;
}
export declare class OrgInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    orgInvitationsDefaultApplicationJSONObject?: OrgInvitationsDefaultApplicationJSON;
}
