import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetLicensing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV3AssetLicensingAssetId - Endpoint for acquiring extended licenses with iStock credits for an asset.
    **/
    postV3AssetLicensingAssetId(req: operations.PostV3AssetLicensingAssetIdRequest, config?: AxiosRequestConfig): Promise<operations.PostV3AssetLicensingAssetIdResponse>;
}
