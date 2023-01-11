import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Session {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSessionUsingGet - creates a new session. validUntil is an unix timestamp in seconds
    **/
    createSessionUsingGet(req: operations.CreateSessionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingGetResponse>;
    /**
     * createSessionUsingPost - creates a new session. validUntil is an unix timestamp in seconds
    **/
    createSessionUsingPost(req: operations.CreateSessionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingPostResponse>;
    /**
     * deleteSessionUsingGet - deletes a session
    **/
    deleteSessionUsingGet(req: operations.DeleteSessionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingGetResponse>;
    /**
     * deleteSessionUsingPost - deletes a session
    **/
    deleteSessionUsingPost(req: operations.DeleteSessionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingPostResponse>;
    /**
     * getSessionInfoUsingGet - returns informations about a session
    **/
    getSessionInfoUsingGet(req: operations.GetSessionInfoUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionInfoUsingGetResponse>;
    /**
     * getSessionInfoUsingPost - returns informations about a session
    **/
    getSessionInfoUsingPost(req: operations.GetSessionInfoUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionInfoUsingPostResponse>;
}
