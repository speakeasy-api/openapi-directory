import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ApiV1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves item usages
     *
     * @remarks
     * This endpoint requires your JSON Web Token to have the *itemusages* feature.
     */
    getItemUsages(req: any, security: operations.GetItemUsagesSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemUsagesResponse>;
    /**
     * Retrieves sign-in attempts
     *
     * @remarks
     * This endpoint requires your JSON Web Token to have the *signinattempts* feature.
     */
    getSignInAttempts(req: any, security: operations.GetSignInAttemptsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSignInAttemptsResponse>;
}
