import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Get {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get public details of an Authentiq ID.
     *
     */
    keyRetrieve(req: operations.KeyRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.KeyRetrieveResponse>;
    /**
     * get the status / current content of a verification job
     */
    signRetrieve(req: operations.SignRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveResponse>;
}
