import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Recipients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resendInvitationsForShare - Resend invitations to share recipients
     *
     * Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.
     *
     * You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.
    **/
    resendInvitationsForShare(req: operations.ResendInvitationsForShareRequest, config?: AxiosRequestConfig): Promise<operations.ResendInvitationsForShareResponse>;
}
