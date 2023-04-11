import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access 1Password Vaults
 */
export declare class Vaults {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Vault details and metadata
     */
    getVaultById(req: operations.GetVaultByIdRequest, security: operations.GetVaultByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetVaultByIdResponse>;
    /**
     * Get all Vaults
     */
    getVaults(req: operations.GetVaultsRequest, security: operations.GetVaultsSecurity, config?: AxiosRequestConfig): Promise<operations.GetVaultsResponse>;
}
