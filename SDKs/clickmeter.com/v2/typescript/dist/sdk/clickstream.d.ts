import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClickStream {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the latest list of events of this account. Limited to last 100.
     */
    clickStreamGet(req: operations.ClickStreamGetRequest, config?: AxiosRequestConfig): Promise<operations.ClickStreamGetResponse>;
}
