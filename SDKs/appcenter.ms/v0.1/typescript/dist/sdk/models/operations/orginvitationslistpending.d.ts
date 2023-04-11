import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgInvitationsListPendingSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrgInvitationsListPendingRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrgInvitationsListPendingDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrgInvitationsListPendingDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrgInvitationsListPendingDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrgInvitationsListPendingDefaultApplicationJSON extends SpeakeasyBase {
    error: OrgInvitationsListPendingDefaultApplicationJSONError;
}
export declare class OrgInvitationsListPending200ApplicationJSON extends SpeakeasyBase {
    /**
     * The email address of the invited user
     */
    email: string;
    /**
     * The unique ID (UUID) of the invitation
     */
    id: string;
    /**
     * The role assigned to the invited user
     */
    role: string;
}
export declare class OrgInvitationsListPendingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    orgInvitationsListPending200ApplicationJSONObjects?: OrgInvitationsListPending200ApplicationJSON[];
    /**
     * Error
     */
    orgInvitationsListPendingDefaultApplicationJSONObject?: OrgInvitationsListPendingDefaultApplicationJSON;
}
