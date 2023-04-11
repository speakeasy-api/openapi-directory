import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Scope {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * this is a scope confirmation
     */
    signConfirm(req: operations.SignConfirmRequest, config?: AxiosRequestConfig): Promise<operations.SignConfirmResponse>;
    /**
     * delete a verification job
     */
    signDelete(req: operations.SignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SignDeleteResponse>;
    /**
     * scope verification request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    signRequest(req: operations.SignRequestRequest, config?: AxiosRequestConfig): Promise<operations.SignRequestResponse>;
    /**
     * get the status / current content of a verification job
     */
    signRetrieve(req: operations.SignRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveResponse>;
    /**
     * HEAD to get the status of a verification job
     */
    signRetrieveHead(req: operations.SignRetrieveHeadRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveHeadResponse>;
    /**
     * authority updates a JWT with its signature
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    signUpdate(req: operations.SignUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SignUpdateResponse>;
}
