import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdvertisingEligibility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method allows developers to check the seller eligibility status for eBay advertising programs.
     */
    getAdvertisingEligibility(req: operations.GetAdvertisingEligibilityRequest, security: operations.GetAdvertisingEligibilitySecurity, config?: AxiosRequestConfig): Promise<operations.GetAdvertisingEligibilityResponse>;
}
