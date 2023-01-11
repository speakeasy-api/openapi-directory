import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["http://stream-api.betfair.com:443/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
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
     * postRequest - This is a socket protocol delimited by CRLF (not http)
    **/
    postRequest(req: operations.PostRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestResponse>;
}
