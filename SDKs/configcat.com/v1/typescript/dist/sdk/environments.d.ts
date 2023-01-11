import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Environments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createEnvironment - Create Environment
     *
     * This endpoint creates a new Environment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * deleteEnvironment - Delete Environment
     *
     * This endpoint removes an Environment identified by the `environmentId` parameter.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * getEnvironment - Get Environment
     *
     * This endpoint returns the metadata of an Environment
     * identified by the `environmentId`.
    **/
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * getEnvironments - List Environments
     *
     * This endpoint returns the list of the Environments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getEnvironments(req: operations.GetEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsResponse>;
    /**
     * updateEnvironment - Update Environment
     *
     * This endpoint updates an Environment identified by the `environmentId` parameter.
    **/
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
