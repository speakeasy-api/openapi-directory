import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Head {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * HEAD info on Authentiq ID
     *
     */
    headKeyPK(req: operations.HeadKeyPKRequest, config?: AxiosRequestConfig): Promise<operations.HeadKeyPKResponse>;
    /**
     * HEAD to get the status of a verification job
     */
    signRetrieveHead(req: operations.SignRetrieveHeadRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveHeadResponse>;
}
