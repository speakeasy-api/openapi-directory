import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Similar {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSimilar - Send a company website to receive a list of companies related to them.
    **/
    getSimilar(req: operations.GetSimilarRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarResponse>;
}
