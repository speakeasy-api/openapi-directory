import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://rest-api.d7networks.com/secure"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.
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
     * Balance
     *
     * @remarks
     * Check account balance
     */
    balanceGet(config?: AxiosRequestConfig): Promise<operations.BalanceGetResponse>;
    /**
     * SendSMS
     *
     * @remarks
     * Send SMS  to recipients using D7 SMS Gateway
     */
    sendPost(req: operations.SendPostRequest, config?: AxiosRequestConfig): Promise<operations.SendPostResponse>;
    /**
     * Bulk SMS
     *
     * @remarks
     * Send Bulk SMS  to multiple recipients using D7 SMS Gateway
     */
    sendbatchPost(req: operations.SendbatchPostRequest, config?: AxiosRequestConfig): Promise<operations.SendbatchPostResponse>;
}
