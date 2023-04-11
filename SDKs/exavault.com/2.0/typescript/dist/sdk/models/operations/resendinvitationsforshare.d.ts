import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResendInvitationsForShareResendInvitationsRequestBody extends SpeakeasyBase {
    /**
     * ID number of recipient to send a new invitation to.
     */
    recipientId?: number;
}
export declare class ResendInvitationsForShareRequest extends SpeakeasyBase {
    requestBody?: ResendInvitationsForShareResendInvitationsRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the share to resend invites for.
     */
    shareId: number;
}
export declare class ResendInvitationsForShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareRecipientsResponse?: shared.ShareRecipientsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
