import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scope {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * signConfirm - this is a scope confirmation
    **/
    signConfirm(req: operations.SignConfirmRequest, config?: AxiosRequestConfig): Promise<operations.SignConfirmResponse>;
    /**
     * signDelete - delete a verification job
    **/
    signDelete(req: operations.SignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SignDeleteResponse>;
    /**
     * signRequest - scope verification request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    signRequest(req: operations.SignRequestRequest, config?: AxiosRequestConfig): Promise<operations.SignRequestResponse>;
    /**
     * signRetrieve - get the status / current content of a verification job
    **/
    signRetrieve(req: operations.SignRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveResponse>;
    /**
     * signRetrieveHead - HEAD to get the status of a verification job
    **/
    signRetrieveHead(req: operations.SignRetrieveHeadRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveHeadResponse>;
    /**
     * signUpdate - authority updates a JWT with its signature
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    signUpdate(req: operations.SignUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SignUpdateResponse>;
}
