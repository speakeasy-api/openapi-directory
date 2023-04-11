import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RecommendedLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * GET recommended destinations
     */
    getRecommendedLocation(req: operations.GetRecommendedLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendedLocationResponse>;
}
