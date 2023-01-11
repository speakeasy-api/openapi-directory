import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SDKKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSdkKeys - Get SDK Key
     *
     * This endpoint returns the SDK Key for your Config in a specified Environment.
    **/
    getSdkKeys(req: operations.GetSDKKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKKeysResponse>;
}
