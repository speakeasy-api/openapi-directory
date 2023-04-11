import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Segment Query Filter Restv 2 Controller
 */
export declare class SegmentQueryFilters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSegmentQueryFiltersConfig
     */
    getSegmentQueryFiltersConfigUsingGET(req: operations.GETSegmentQueryFiltersConfigUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSegmentQueryFiltersConfigUsingGETResponse>;
    /**
     * getSegmentQueryFilters
     */
    getSegmentQueryFiltersUsingGET(req: operations.GETSegmentQueryFiltersUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSegmentQueryFiltersUsingGETResponse>;
    /**
     * getSegmentQueryStandardFilters
     */
    getSegmentQueryStandardFiltersUsingGET(req: operations.GETSegmentQueryStandardFiltersUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSegmentQueryStandardFiltersUsingGETResponse>;
    /**
     * updateSegmentQueryFiltersConfig
     */
    updateSegmentQueryFiltersConfigUsingPUT(req: operations.UpdateSegmentQueryFiltersConfigUsingPUTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSegmentQueryFiltersConfigUsingPUTResponse>;
}
