import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Network {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of networks
     *
     * @remarks
     * ### Deprecations
     *
     * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
     *   and will be removed from the response in a future release.
     *
     */
    getNetworks(req: operations.GetNetworksRequest, security: operations.GetNetworksSecurity, config?: AxiosRequestConfig): Promise<operations.GetNetworksResponse>;
    /**
     * Get a specific network
     *
     * @remarks
     * ### Deprecations
     *
     * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
     *   and will be removed from the response in a future release.
     *
     */
    getNetworksId(req: operations.GetNetworksIdRequest, security: operations.GetNetworksIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetNetworksIdResponse>;
}
