import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RankCarListings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Compute relative rank for car listings.
     *
     * @remarks
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
     */
    rankCar(req: operations.RankCarRequest, config?: AxiosRequestConfig): Promise<operations.RankCarResponse>;
    /**
     * Compute relative rank for car listings.
     *
     * @remarks
     * Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
     */
    searchAndRankCar(req: operations.SearchAndRankCarRequest, config?: AxiosRequestConfig): Promise<operations.SearchAndRankCarResponse>;
}
