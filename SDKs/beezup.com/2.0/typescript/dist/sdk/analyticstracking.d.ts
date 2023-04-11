import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AnalyticsTracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the latest tracked clicks
     */
    getStoreTrackedClicks(req: operations.GetStoreTrackedClicksRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreTrackedClicksResponse>;
    /**
     * Get the latest tracked external orders
     */
    getStoreTrackedExternalOrders(req: operations.GetStoreTrackedExternalOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreTrackedExternalOrdersResponse>;
    /**
     * Get the latest tracked orders
     */
    getStoreTrackedOrders(req: operations.GetStoreTrackedOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreTrackedOrdersResponse>;
    /**
     * Get the synchronization status of clicks and orders of a store
     *
     * @remarks
     * Clicks and orders are eventually consistent. \
     * This operation gets the current state of projections for a store.
     *
     */
    getStoreTrackingStatus(req: operations.GetStoreTrackingStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreTrackingStatusResponse>;
    /**
     * Get the global synchronization status of clicks and orders
     *
     * @remarks
     * Clicks and orders are eventually consistent. \
     * This operation gets the current global state of projections.
     *
     */
    getTrackingStatus(config?: AxiosRequestConfig): Promise<operations.GetTrackingStatusResponse>;
}
