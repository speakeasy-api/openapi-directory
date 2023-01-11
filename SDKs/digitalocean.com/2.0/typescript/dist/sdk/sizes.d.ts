import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sizes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listAllSizes - List All Droplet Sizes
     *
     * To list all of available Droplet sizes, send a GET request to `/v2/sizes`.
     * The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.
    **/
    listAllSizes(req: operations.ListAllSizesRequest, config?: AxiosRequestConfig): Promise<operations.ListAllSizesResponse>;
}
