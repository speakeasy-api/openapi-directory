import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your SDK Keys.
 */
export declare class SDKKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get SDK Key
     *
     * @remarks
     * This endpoint returns the SDK Key for your Config in a specified Environment.
     */
    getSDKKeys(req: operations.GetSDKKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKKeysResponse>;
}
