import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * TIN Verification methods
 */
export declare class V1TinVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Verifies a TIN number
     *
     * @remarks
     * Performs a basic verification check of a given TIN number and name.
     */
    tinVerificationBasicCheck(req: operations.TinVerificationBasicCheckRequest, security: operations.TinVerificationBasicCheckSecurity, config?: AxiosRequestConfig): Promise<operations.TinVerificationBasicCheckResponse>;
    /**
     * EIN Name Lookup with TIN number and retrieves company data
     *
     * @remarks
     * Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
     */
    tinVerificationComprehensiveCheck(req: operations.TinVerificationComprehensiveCheckRequest, security: operations.TinVerificationComprehensiveCheckSecurity, config?: AxiosRequestConfig): Promise<operations.TinVerificationComprehensiveCheckResponse>;
    /**
     * EIN Name Lookup with TIN number
     *
     * @remarks
     * Performs an EIN name match using provided TIN Number
     */
    tinVerificationNameLookup(req: operations.TinVerificationNameLookupRequest, security: operations.TinVerificationNameLookupSecurity, config?: AxiosRequestConfig): Promise<operations.TinVerificationNameLookupResponse>;
}
