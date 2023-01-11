import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Head {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * headKeyPk - HEAD info on Authentiq ID
     *
    **/
    headKeyPk(req: operations.HeadKeyPkRequest, config?: AxiosRequestConfig): Promise<operations.HeadKeyPkResponse>;
    /**
     * signRetrieveHead - HEAD to get the status of a verification job
    **/
    signRetrieveHead(req: operations.SignRetrieveHeadRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveHeadResponse>;
}
