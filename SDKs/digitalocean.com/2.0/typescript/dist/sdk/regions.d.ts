import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Regions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listAllRegions - List All Data Center Regions
     *
     * To list all of the regions that are available, send a GET request to `/v2/regions`.
     * The response will be a JSON object with a key called `regions`. The value of this will be an array of `region` objects, each of which will contain the standard region attributes.
    **/
    listAllRegions(req: operations.ListAllRegionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllRegionsResponse>;
}
