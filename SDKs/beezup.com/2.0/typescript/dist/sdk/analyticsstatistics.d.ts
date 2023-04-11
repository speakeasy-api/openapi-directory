import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AnalyticsStatistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the report by category
     *
     * @remarks
     * Get the report by category
     */
    getStoreReportByCategory(req: operations.GetStoreReportByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByCategoryResponse>;
    /**
     * Get the report by channel
     *
     * @remarks
     * Get the report by channel
     */
    getStoreReportByChannel(req: operations.GetStoreReportByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByChannelResponse>;
    /**
     * Get the report by day for a StoreId
     *
     * @remarks
     * Get the report by day for a StoreId
     */
    getStoreReportByDay(req: operations.GetStoreReportByDayRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByDayResponse>;
    /**
     * Get the report by day for a StoreId
     *
     * @remarks
     * Get the report by day for a StoreId
     */
    getStoreReportByDayPerStore(req: shared.ReportByDayRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByDayPerStoreResponse>;
    /**
     * Get the report by product
     *
     * @remarks
     * Get the report by product
     */
    getStoreReportByProduct(req: operations.GetStoreReportByProductRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByProductResponse>;
}
