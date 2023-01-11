import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Email {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sendReferralEmail - Send referral email to a given address
     *
     * Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral.
    **/
    sendReferralEmail(req: operations.SendReferralEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendReferralEmailResponse>;
    /**
     * sendWelcomeEmail - Resend welcome email to specific user
     *
     * Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).
    **/
    sendWelcomeEmail(req: operations.SendWelcomeEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendWelcomeEmailResponse>;
}
