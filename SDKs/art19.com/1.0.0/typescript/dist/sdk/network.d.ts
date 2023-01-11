import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Network {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworks - Get a list of networks
     *
     * ### Deprecations
     *
     * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
     *   and will be removed from the response in a future release.
     *
    **/
    getNetworks(req: operations.GetNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksResponse>;
    /**
     * getNetworksId - Get a specific network
     *
     * ### Deprecations
     *
     * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
     *   and will be removed from the response in a future release.
     *
    **/
    getNetworksId(req: operations.GetNetworksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksIdResponse>;
}
