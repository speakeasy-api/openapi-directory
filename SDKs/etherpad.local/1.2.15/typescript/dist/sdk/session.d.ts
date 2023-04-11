import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Session {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * creates a new session. validUntil is an unix timestamp in seconds
     */
    createSessionUsingGET(req: operations.CreateSessionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingGETResponse>;
    /**
     * creates a new session. validUntil is an unix timestamp in seconds
     */
    createSessionUsingPOST(req: operations.CreateSessionUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingPOSTResponse>;
    /**
     * deletes a session
     */
    deleteSessionUsingGET(req: operations.DeleteSessionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingGETResponse>;
    /**
     * deletes a session
     */
    deleteSessionUsingPOST(req: operations.DeleteSessionUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingPOSTResponse>;
    /**
     * returns informations about a session
     */
    getSessionInfoUsingGET(req: operations.GETSessionInfoUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSessionInfoUsingGETResponse>;
    /**
     * returns informations about a session
     */
    getSessionInfoUsingPOST(req: operations.GetSessionInfoUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionInfoUsingPOSTResponse>;
}
