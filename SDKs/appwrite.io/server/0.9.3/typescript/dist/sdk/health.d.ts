import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Health service allows you to both validate and monitor your Appwrite server's health.
 */
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get HTTP
     *
     * @remarks
     * Check the Appwrite HTTP server is up and responsive.
     */
    healthGet(config?: AxiosRequestConfig): Promise<operations.HealthGetResponse>;
    /**
     * Get Anti virus
     *
     * @remarks
     * Check the Appwrite Anti Virus server is up and connection is successful.
     */
    healthGetAntiVirus(config?: AxiosRequestConfig): Promise<operations.HealthGetAntiVirusResponse>;
    /**
     * Get Cache
     *
     * @remarks
     * Check the Appwrite in-memory cache server is up and connection is successful.
     */
    healthGetCache(config?: AxiosRequestConfig): Promise<operations.HealthGetCacheResponse>;
    /**
     * Get DB
     *
     * @remarks
     * Check the Appwrite database server is up and connection is successful.
     */
    healthGetDB(config?: AxiosRequestConfig): Promise<operations.HealthGetDBResponse>;
    /**
     * Get Certificate Queue
     *
     * @remarks
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     */
    healthGetQueueCertificates(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueCertificatesResponse>;
    /**
     * Get Functions Queue
     */
    healthGetQueueFunctions(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueFunctionsResponse>;
    /**
     * Get Logs Queue
     *
     * @remarks
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     */
    healthGetQueueLogs(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueLogsResponse>;
    /**
     * Get Tasks Queue
     *
     * @remarks
     * Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
     */
    healthGetQueueTasks(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueTasksResponse>;
    /**
     * Get Usage Queue
     *
     * @remarks
     * Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
     */
    healthGetQueueUsage(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueUsageResponse>;
    /**
     * Get Webhooks Queue
     *
     * @remarks
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     */
    healthGetQueueWebhooks(config?: AxiosRequestConfig): Promise<operations.HealthGetQueueWebhooksResponse>;
    /**
     * Get Local Storage
     *
     * @remarks
     * Check the Appwrite local storage device is up and connection is successful.
     */
    healthGetStorageLocal(config?: AxiosRequestConfig): Promise<operations.HealthGetStorageLocalResponse>;
    /**
     * Get Time
     *
     * @remarks
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
     */
    healthGetTime(config?: AxiosRequestConfig): Promise<operations.HealthGetTimeResponse>;
}
