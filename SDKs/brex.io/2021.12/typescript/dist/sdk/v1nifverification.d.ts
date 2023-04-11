import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * NIF Verification methods
 */
export declare class V1NifVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Verifies a NIF number
     *
     * @remarks
     * Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.
     */
    nifBasic(req: operations.NifBasicRequest, security: operations.NifBasicSecurity, config?: AxiosRequestConfig): Promise<operations.NifBasicResponse>;
    /**
     * Verifies a NIF number and retrieves company data
     *
     * @remarks
     * Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.
     */
    nifComprehensive(req: operations.NifComprehensiveRequest, security: operations.NifComprehensiveSecurity, config?: AxiosRequestConfig): Promise<operations.NifComprehensiveResponse>;
}
