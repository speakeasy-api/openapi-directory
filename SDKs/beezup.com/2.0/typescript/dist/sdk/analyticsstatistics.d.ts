import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AnalyticsStatistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getStoreReportByCategory - Get the report by category
     *
     * Get the report by category
    **/
    getStoreReportByCategory(req: operations.GetStoreReportByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByCategoryResponse>;
    /**
     * getStoreReportByChannel - Get the report by channel
     *
     * Get the report by channel
    **/
    getStoreReportByChannel(req: operations.GetStoreReportByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByChannelResponse>;
    /**
     * getStoreReportByDay - Get the report by day for a StoreId
     *
     * Get the report by day for a StoreId
    **/
    getStoreReportByDay(req: operations.GetStoreReportByDayRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByDayResponse>;
    /**
     * getStoreReportByDayPerStore - Get the report by day for a StoreId
     *
     * Get the report by day for a StoreId
    **/
    getStoreReportByDayPerStore(req: operations.GetStoreReportByDayPerStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByDayPerStoreResponse>;
    /**
     * getStoreReportByProduct - Get the report by product
     *
     * Get the report by product
    **/
    getStoreReportByProduct(req: operations.GetStoreReportByProductRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreReportByProductResponse>;
}
