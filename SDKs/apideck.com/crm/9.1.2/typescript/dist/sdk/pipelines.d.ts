import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pipelines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create pipeline
     *
     * @remarks
     * Create pipeline
     */
    pipelinesAdd(req: operations.PipelinesAddRequest, security: operations.PipelinesAddSecurity, config?: AxiosRequestConfig): Promise<operations.PipelinesAddResponse>;
    /**
     * List pipelines
     *
     * @remarks
     * List pipelines
     */
    pipelinesAll(req: operations.PipelinesAllRequest, security: operations.PipelinesAllSecurity, config?: AxiosRequestConfig): Promise<operations.PipelinesAllResponse>;
    /**
     * Delete pipeline
     *
     * @remarks
     * Delete pipeline
     */
    pipelinesDelete(req: operations.PipelinesDeleteRequest, security: operations.PipelinesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PipelinesDeleteResponse>;
    /**
     * Get pipeline
     *
     * @remarks
     * Get pipeline
     */
    pipelinesOne(req: operations.PipelinesOneRequest, security: operations.PipelinesOneSecurity, config?: AxiosRequestConfig): Promise<operations.PipelinesOneResponse>;
    /**
     * Update pipeline
     *
     * @remarks
     * Update pipeline
     */
    pipelinesUpdate(req: operations.PipelinesUpdateRequest, security: operations.PipelinesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PipelinesUpdateResponse>;
}
