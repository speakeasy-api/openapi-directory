import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Credit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of credits
     */
    getCredits(req: operations.GetCreditsRequest, security: operations.GetCreditsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCreditsResponse>;
    /**
     * Get a specific credit
     */
    getCreditsId(req: operations.GetCreditsIdRequest, security: operations.GetCreditsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCreditsIdResponse>;
}
