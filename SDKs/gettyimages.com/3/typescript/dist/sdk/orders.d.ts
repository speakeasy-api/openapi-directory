import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3OrdersId - Get order metadata
     *
     * This endpoint returns detailed order metadata for a specified order.
     * Use of this endpoint requires configuration changes to your API key.
     *
     * You'll need an API key and access token to use this resource.
    **/
    getV3OrdersId(req: operations.GetV3OrdersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV3OrdersIdResponse>;
}
