import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get province(s) with associated holidays
 */
export declare class Provinces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a province or territory by abbreviation
     *
     * @remarks
     * Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.
     */
    province(req: operations.ProvinceRequest, config?: AxiosRequestConfig): Promise<operations.ProvinceResponse>;
    /**
     * Get all provinces
     *
     * @remarks
     * Returns provinces and territories in Canada. Each province or territory lists its associated holidays.
     */
    provinces(req: operations.ProvincesRequest, config?: AxiosRequestConfig): Promise<operations.ProvincesResponse>;
}
