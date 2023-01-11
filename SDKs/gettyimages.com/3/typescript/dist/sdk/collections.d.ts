import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3Collections - Gets collections applicable for the customer.
     *
     * Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3Collections(req: operations.GetV3CollectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3CollectionsResponse>;
}
