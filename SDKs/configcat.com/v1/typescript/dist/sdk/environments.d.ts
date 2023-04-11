import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products).
 *
 * @remarks
 *
 * <a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.
 */
export declare class Environments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Environment
     *
     * @remarks
     * This endpoint creates a new Environment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * Delete Environment
     *
     * @remarks
     * This endpoint removes an Environment identified by the `environmentId` parameter.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * Get Environment
     *
     * @remarks
     * This endpoint returns the metadata of an Environment
     * identified by the `environmentId`.
     */
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * List Environments
     *
     * @remarks
     * This endpoint returns the list of the Environments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    getEnvironments(req: operations.GetEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsResponse>;
    /**
     * Update Environment
     *
     * @remarks
     * This endpoint updates an Environment identified by the `environmentId` parameter.
     */
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
