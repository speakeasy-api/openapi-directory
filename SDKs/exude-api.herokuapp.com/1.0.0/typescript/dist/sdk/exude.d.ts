import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Exude {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Filter the stopping words from the provided input file
     */
    filterFileDataStoppings(req: operations.FilterFileDataStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterFileDataStoppingsResponse>;
    /**
     * Filter the stopping words from the provided input data or links
     */
    filterStoppings(req: operations.FilterStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterStoppingsResponse>;
}
