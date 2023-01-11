import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Monitoring {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAlertPolicy - Create Alert Policy
     *
     * To create a new alert, send a POST request to `/v2/monitoring/alerts`.
    **/
    createAlertPolicy(req: operations.CreateAlertPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlertPolicyResponse>;
    /**
     * deleteAlertPolicy - Delete an Alert Policy
     *
     * To delete an alert policy, send a DELETE request to `/v2/monitoring/alerts/{alert_uuid}`
    **/
    deleteAlertPolicy(req: operations.DeleteAlertPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertPolicyResponse>;
    /**
     * getAlertPolicy - Retrieve an Existing Alert Policy
     *
     * To retrieve a given alert policy, send a GET request to `/v2/monitoring/alerts/{alert_uuid}`
    **/
    getAlertPolicy(req: operations.GetAlertPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetAlertPolicyResponse>;
    /**
     * getDropletBandwidthMetrics - Get Droplet Bandwidth Metrics
     *
     * To retrieve bandwidth metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/bandwidth`.
    **/
    getDropletBandwidthMetrics(req: operations.GetDropletBandwidthMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletBandwidthMetricsResponse>;
    /**
     * getDropletCpuMetrics - Get Droplet CPU Metrics
     *
     * To retrieve CPU metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/cpu`.
    **/
    getDropletCpuMetrics(req: operations.GetDropletCpuMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletCpuMetricsResponse>;
    /**
     * getDropletFilesystemFreeMetrics - Get Droplet Filesystem Free Metrics
     *
     * To retrieve filesystem free metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_free`.
    **/
    getDropletFilesystemFreeMetrics(req: operations.GetDropletFilesystemFreeMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletFilesystemFreeMetricsResponse>;
    /**
     * getDropletFilesystemSizeMetrics - Get Droplet Filesystem Size Metrics
     *
     * To retrieve filesystem size metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_size`.
    **/
    getDropletFilesystemSizeMetrics(req: operations.GetDropletFilesystemSizeMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletFilesystemSizeMetricsResponse>;
    /**
     * getDropletLoad15Metrics - Get Droplet Load15 Metrics
     *
     * To retrieve 15 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_15`.
    **/
    getDropletLoad15Metrics(req: operations.GetDropletLoad15MetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletLoad15MetricsResponse>;
    /**
     * getDropletLoad1Metrics - Get Droplet Load1 Metrics
     *
     * To retrieve 1 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_1`.
    **/
    getDropletLoad1Metrics(req: operations.GetDropletLoad1MetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletLoad1MetricsResponse>;
    /**
     * getDropletLoad5Metrics - Get Droplet Load5 Metrics
     *
     * To retrieve 5 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_5`.
    **/
    getDropletLoad5Metrics(req: operations.GetDropletLoad5MetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletLoad5MetricsResponse>;
    /**
     * getDropletMemoryAvailableMetrics - Get Droplet Available Memory Metrics
     *
     * To retrieve available memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_available`.
    **/
    getDropletMemoryAvailableMetrics(req: operations.GetDropletMemoryAvailableMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletMemoryAvailableMetricsResponse>;
    /**
     * getDropletMemoryCachedMetrics - Get Droplet Cached Memory Metrics
     *
     * To retrieve cached memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_cached`.
    **/
    getDropletMemoryCachedMetrics(req: operations.GetDropletMemoryCachedMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletMemoryCachedMetricsResponse>;
    /**
     * getDropletMemoryFreeMetrics - Get Droplet Free Memory Metrics
     *
     * To retrieve free memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_free`.
    **/
    getDropletMemoryFreeMetrics(req: operations.GetDropletMemoryFreeMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletMemoryFreeMetricsResponse>;
    /**
     * getDropletMemoryTotalMetrics - Get Droplet Total Memory Metrics
     *
     * To retrieve total memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_total`.
    **/
    getDropletMemoryTotalMetrics(req: operations.GetDropletMemoryTotalMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropletMemoryTotalMetricsResponse>;
    /**
     * listAlertPolicies - List Alert Policies
     *
     * Returns all alert policies that are configured for the given account. To List all alert policies, send a GET request to `/v2/monitoring/alerts`.
    **/
    listAlertPolicies(req: operations.ListAlertPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListAlertPoliciesResponse>;
    /**
     * updateAlertPolicy - Update an Alert Policy
     *
     * To update en existing policy, send a PUT request to `v2/monitoring/alerts/{alert_uuid}`.
    **/
    updateAlertPolicy(req: operations.UpdateAlertPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAlertPolicyResponse>;
}
