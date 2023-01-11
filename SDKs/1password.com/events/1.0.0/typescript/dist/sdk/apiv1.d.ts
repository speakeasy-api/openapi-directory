import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiV1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getItemUsages - Retrieves item usages
     *
     * This endpoint requires your JSON Web Token to have the *itemusages* feature.
    **/
    getItemUsages(req: operations.GetItemUsagesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemUsagesResponse>;
    /**
     * getSignInAttempts - Retrieves sign-in attempts
     *
     * This endpoint requires your JSON Web Token to have the *signinattempts* feature.
    **/
    getSignInAttempts(req: operations.GetSignInAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetSignInAttemptsResponse>;
}
