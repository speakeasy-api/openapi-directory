import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPrometheusMetrics - Query server for exposed Prometheus metrics
     *
     * See Prometheus documentation for a complete data model.
    **/
    getPrometheusMetrics(req: operations.GetPrometheusMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetPrometheusMetricsResponse>;
}
