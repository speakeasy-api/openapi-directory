import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Credit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCredits - Get a list of credits
    **/
    getCredits(req: operations.GetCreditsRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditsResponse>;
    /**
     * getCreditsId - Get a specific credit
    **/
    getCreditsId(req: operations.GetCreditsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditsIdResponse>;
}
