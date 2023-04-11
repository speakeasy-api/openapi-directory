import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * US EIN tax number methods
 */
export declare class V1EinVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Verifies an EIN number
     *
     * @remarks
     * Performs a basic verification check of a given EIN tax number.
     */
    einVerificationBasic(req: operations.EinVerificationBasicRequest, security: operations.EinVerificationBasicSecurity, config?: AxiosRequestConfig): Promise<operations.EinVerificationBasicResponse>;
    /**
     * Verifies EIN number and retrieves company data
     *
     * @remarks
     * Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details
     */
    einVerificationComprehensive(req: operations.EinVerificationComprehensiveRequest, security: operations.EinVerificationComprehensiveSecurity, config?: AxiosRequestConfig): Promise<operations.EinVerificationComprehensiveResponse>;
    /**
     * Retrieves a list of EIN numbers
     *
     * @remarks
     * Lookup EIN number for a company by its company name
     */
    einVerificationLookup(req: operations.EinVerificationLookupRequest, security: operations.EinVerificationLookupSecurity, config?: AxiosRequestConfig): Promise<operations.EinVerificationLookupResponse>;
}
