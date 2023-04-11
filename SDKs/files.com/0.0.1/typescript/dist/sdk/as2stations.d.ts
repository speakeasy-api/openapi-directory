import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about as2_stations
 */
export declare class As2Stations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete As2 Station
     *
     * @remarks
     * Delete As2 Station
     */
    deleteAs2StationsId(req: operations.DeleteAs2StationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAs2StationsIdResponse>;
    /**
     * List As2 Stations
     *
     * @remarks
     * List As2 Stations
     */
    getAs2Stations(req: operations.GetAs2StationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2StationsResponse>;
    /**
     * Show As2 Station
     *
     * @remarks
     * Show As2 Station
     */
    getAs2StationsId(req: operations.GetAs2StationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2StationsIdResponse>;
    /**
     * Update As2 Station
     *
     * @remarks
     * Update As2 Station
     */
    patchAs2StationsId(req: operations.PatchAs2StationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAs2StationsIdResponse>;
    /**
     * Create As2 Station
     *
     * @remarks
     * Create As2 Station
     */
    postAs2Stations(req: operations.PostAs2StationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAs2StationsResponse>;
}
