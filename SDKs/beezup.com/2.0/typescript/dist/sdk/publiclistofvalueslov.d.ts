import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PublicListOfValuesLov {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPublicListOfValues - Get the list of values related to this list name
    **/
    getPublicListOfValues(req: operations.GetPublicListOfValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicListOfValuesResponse>;
    /**
     * getPublicLovIndex - Get all list names
    **/
    getPublicLovIndex(req: operations.GetPublicLovIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicLovIndexResponse>;
}
