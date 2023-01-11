import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Purchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3PurchasedAssets - Get Previously Purchased Images and Video
     *
     * This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication.
     * Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
     * to learn more.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3PurchasedAssets(req: operations.GetV3PurchasedAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3PurchasedAssetsResponse>;
}
