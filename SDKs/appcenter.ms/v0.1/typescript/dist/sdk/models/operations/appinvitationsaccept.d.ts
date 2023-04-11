import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsAcceptSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppInvitationsAcceptRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The app invitation token that was sent to the user
     */
    invitationToken: string;
}
export declare enum AppInvitationsAcceptDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsAcceptDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsAcceptDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsAcceptDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsAcceptDefaultApplicationJSONError;
}
export declare class AppInvitationsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appInvitationsAcceptDefaultApplicationJSONObject?: AppInvitationsAcceptDefaultApplicationJSON;
}
