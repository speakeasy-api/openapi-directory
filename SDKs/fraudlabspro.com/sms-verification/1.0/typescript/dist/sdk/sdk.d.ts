import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.fraudlabspro.com", "https://api.fraudlabspro.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Verify that an OTP sent by the Send SMS Verification API is valid.
     */
    getV1VerificationResult(req: operations.GetV1VerificationResultRequest, config?: AxiosRequestConfig): Promise<operations.GetV1VerificationResultResponse>;
    /**
     * Send an SMS with verification code and a custom message for authentication purpose.
     */
    postV1VerificationSend(req: operations.PostV1VerificationSendRequest, config?: AxiosRequestConfig): Promise<operations.PostV1VerificationSendResponse>;
}
