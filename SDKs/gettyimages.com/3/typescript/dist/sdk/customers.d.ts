import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3CustomersCurrent - Returns information about the current user.
     *
     * Returns the first, middle and last name of the authenticated user.
     *
     * You'll need an API key and access token to use this resource.
     *
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     *
    **/
    getV3CustomersCurrent(req: operations.GetV3CustomersCurrentRequest, config?: AxiosRequestConfig): Promise<operations.GetV3CustomersCurrentResponse>;
}
