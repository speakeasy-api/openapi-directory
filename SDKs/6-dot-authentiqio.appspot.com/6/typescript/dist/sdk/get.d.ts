import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Get {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * keyRetrieve - Get public details of an Authentiq ID.
     *
    **/
    keyRetrieve(req: operations.KeyRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.KeyRetrieveResponse>;
    /**
     * signRetrieve - get the status / current content of a verification job
    **/
    signRetrieve(req: operations.SignRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveResponse>;
}
