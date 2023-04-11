import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CarsHistoryAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a cars online listing history
     *
     * @remarks
     * The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date
     */
    getCarHistory(req: operations.GetCarHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCarHistoryResponse>;
    /**
     * Get a cars online listing history
     *
     * @remarks
     * The history API returns online listing history for a car identified by its VRM. History listings are sorted in the descending order of the listing date / last seen date
     */
    getHistoryCarUkVrm(req: operations.GetHistoryCarUkVrmRequest, config?: AxiosRequestConfig): Promise<operations.GetHistoryCarUkVrmResponse>;
}
