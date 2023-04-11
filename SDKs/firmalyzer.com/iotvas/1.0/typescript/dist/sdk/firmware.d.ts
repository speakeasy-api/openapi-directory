import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Firmware {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get default accounts and password hashes of a firmware
     */
    getAccounts(req: operations.GetAccountsRequest, security: operations.GetAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * Get default OS configuration issues of a device firmware
     */
    getConfigIssues(req: operations.GetConfigIssuesRequest, security: operations.GetConfigIssuesSecurity, config?: AxiosRequestConfig): Promise<operations.GetConfigIssuesResponse>;
    /**
     * Get expired digital certificates embedded in a device firmware
     */
    getExpiredCerts(req: operations.GetExpiredCertsRequest, security: operations.GetExpiredCertsSecurity, config?: AxiosRequestConfig): Promise<operations.GetExpiredCertsResponse>;
    /**
     * Get private crypto keys embedded in a device firmware
     */
    getPrivateKeys(req: operations.GetPrivateKeysRequest, security: operations.GetPrivateKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetPrivateKeysResponse>;
    /**
     * Get iot device firmware risk analysis
     */
    getRisk(req: operations.GetRiskRequest, security: operations.GetRiskSecurity, config?: AxiosRequestConfig): Promise<operations.GetRiskResponse>;
    /**
     * Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
     */
    getWeakCerts(req: operations.GetWeakCertsRequest, security: operations.GetWeakCertsSecurity, config?: AxiosRequestConfig): Promise<operations.GetWeakCertsResponse>;
    /**
     * Get weak crypto keys with short length
     */
    getWeakKeys(req: operations.GetWeakKeysRequest, security: operations.GetWeakKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetWeakKeysResponse>;
}
