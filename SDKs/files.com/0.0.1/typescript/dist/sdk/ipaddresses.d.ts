import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about ip_addresses
 */
export declare class IpAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List IP Addresses associated with the current site
     *
     * @remarks
     * List IP Addresses associated with the current site
     */
    getIpAddresses(req: operations.GetIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetIpAddressesResponse>;
    /**
     * List all possible public ExaVault IP addresses
     *
     * @remarks
     * List all possible public ExaVault IP addresses
     */
    getIpAddressesExavaultReserved(req: operations.GetIpAddressesExavaultReservedRequest, config?: AxiosRequestConfig): Promise<operations.GetIpAddressesExavaultReservedResponse>;
    /**
     * List all possible public IP addresses
     *
     * @remarks
     * List all possible public IP addresses
     */
    getIpAddressesReserved(req: operations.GetIpAddressesReservedRequest, config?: AxiosRequestConfig): Promise<operations.GetIpAddressesReservedResponse>;
}
