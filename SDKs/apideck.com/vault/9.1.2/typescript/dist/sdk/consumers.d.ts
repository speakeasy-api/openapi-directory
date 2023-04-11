import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A consumer represents an account or user in your system. All connections to connectors are scoped to a consumer.
 */
export declare class Consumers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Consumer request counts
     *
     * @remarks
     * Get consumer request counts within a given datetime range.
     *
     */
    consumerRequestCountsAll(req: operations.ConsumerRequestCountsAllRequest, security: operations.ConsumerRequestCountsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumerRequestCountsAllResponse>;
    /**
     * Create consumer
     *
     * @remarks
     * Create a consumer
     */
    consumersAdd(req: operations.ConsumersAddRequest, security: operations.ConsumersAddSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumersAddResponse>;
    /**
     * Get all consumers
     *
     * @remarks
     * This endpoint includes all application consumers, along with an aggregated count of requests made.
     *
     */
    consumersAll(req: operations.ConsumersAllRequest, security: operations.ConsumersAllSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumersAllResponse>;
    /**
     * Delete consumer
     *
     * @remarks
     * Delete consumer and all their connections, including credentials.
     */
    consumersDelete(req: operations.ConsumersDeleteRequest, security: operations.ConsumersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumersDeleteResponse>;
    /**
     * Get consumer
     *
     * @remarks
     * Consumer detail including their aggregated counts with the connections they have authorized.
     *
     */
    consumersOne(req: operations.ConsumersOneRequest, security: operations.ConsumersOneSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumersOneResponse>;
    /**
     * Update consumer
     *
     * @remarks
     * Update consumer metadata such as name and email.
     */
    consumersUpdate(req: operations.ConsumersUpdateRequest, security: operations.ConsumersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ConsumersUpdateResponse>;
}
