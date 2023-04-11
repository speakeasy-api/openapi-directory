import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * IBAN Verification methods
 */
export declare class V1IbanVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks validity of an IBAN number
     *
     * @remarks
     * Basic verification of an IBAN number validating its structure
     */
    ibanBasic(req: operations.IbanBasicRequestBody, security: operations.IbanBasicSecurity, config?: AxiosRequestConfig): Promise<operations.IbanBasicResponse>;
    /**
     * Checks validity of an IBAN number
     *
     * @remarks
     * Comprehensive verification of IBAN number using a service provider for verification
     */
    ibanComprehensive(req: operations.IbanComprehensiveRequestBody, security: operations.IbanComprehensiveSecurity, config?: AxiosRequestConfig): Promise<operations.IbanComprehensiveResponse>;
}
