import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["https://rest-api.d7networks.com/secure"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * balanceGet - Balance
     *
     * Check account balance
    **/
    balanceGet(config?: AxiosRequestConfig): Promise<operations.BalanceGetResponse>;
    /**
     * sendPost - SendSMS
     *
     * Send SMS  to recipients using D7 SMS Gateway
    **/
    sendPost(req: operations.SendPostRequest, config?: AxiosRequestConfig): Promise<operations.SendPostResponse>;
    /**
     * sendbatchPost - Bulk SMS
     *
     * Send Bulk SMS  to multiple recipients using D7 SMS Gateway
    **/
    sendbatchPost(req: operations.SendbatchPostRequest, config?: AxiosRequestConfig): Promise<operations.SendbatchPostResponse>;
}
