import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CarsHistoryApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCarHistory - Get a cars online listing history
     *
     * The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date
    **/
    getCarHistory(req: operations.GetCarHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCarHistoryResponse>;
}
