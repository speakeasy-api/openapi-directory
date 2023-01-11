import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3Products - Get Products
     *
     * This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
     * a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3Products(req: operations.GetV3ProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ProductsResponse>;
}
