import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsRejectSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppInvitationsRejectRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The app invitation token that was sent to the user
     */
    invitationToken: string;
}
export declare enum AppInvitationsRejectDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsRejectDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsRejectDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsRejectDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsRejectDefaultApplicationJSONError;
}
export declare class AppInvitationsRejectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsRejectDefaultApplicationJSONObject?: AppInvitationsRejectDefaultApplicationJSON;
}
