import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RankCarListings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * rankCar - Compute relative rank for car listings.
     *
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
    **/
    rankCar(req: operations.RankCarRequest, config?: AxiosRequestConfig): Promise<operations.RankCarResponse>;
    /**
     * searchAndRankCar - Compute relative rank for car listings.
     *
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
    **/
    searchAndRankCar(req: operations.SearchAndRankCarRequest, config?: AxiosRequestConfig): Promise<operations.SearchAndRankCarResponse>;
}
