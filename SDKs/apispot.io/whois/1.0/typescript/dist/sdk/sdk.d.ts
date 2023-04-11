import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://localhost:5000", "https://apispot.io/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Domain API (WHOIS, Check, Batch)
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Check domain availability
     */
    checkDomain(req: operations.CheckDomainRequest, config?: AxiosRequestConfig): Promise<operations.CheckDomainResponse>;
    /**
     * Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
     */
    createBatch(req: operations.CreateBatchRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateBatchResponse>;
    /**
     * Delete batch
     */
    deleteBatch(req: operations.DeleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchResponse>;
    /**
     * Check domain rank (authority).
     */
    domainRank(req: operations.DomainRankRequest, config?: AxiosRequestConfig): Promise<operations.DomainRankResponse>;
    /**
     * Get batch
     */
    getBatch(req: operations.GetBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchResponse>;
    /**
     * Get your batches
     */
    getBatches(config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    /**
     * Query domain database
     */
    queryDb(req: operations.QueryDbRequest, config?: AxiosRequestConfig): Promise<operations.QueryDbResponse>;
    /**
     * WHOIS query for a domain
     */
    whois(req: operations.WhoisRequest, config?: AxiosRequestConfig): Promise<operations.WhoisResponse>;
}
