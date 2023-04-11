import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Metrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Query server for exposed Prometheus metrics
     *
     * @remarks
     * See Prometheus documentation for a complete data model.
     */
    getPrometheusMetrics(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetPrometheusMetricsResponse>;
}
