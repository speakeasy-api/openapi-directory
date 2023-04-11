import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if an operation to be created is valid
     */
    checkOperation(req: shared.OperatorConfiguration, config?: AxiosRequestConfig): Promise<operations.CheckOperationResponse>;
    /**
     * Create an operation to be applied as part of a connection pipeline
     */
    createOperation(req: shared.OperationCreate, config?: AxiosRequestConfig): Promise<operations.CreateOperationResponse>;
    /**
     * Delete an operation
     */
    deleteOperation(req: shared.OperationIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteOperationResponse>;
    /**
     * Returns an operation
     */
    getOperation(req: shared.OperationIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    /**
     * Returns all operations for a connection.
     *
     * @remarks
     * List operations for connection.
     */
    listOperationsForConnection(req: shared.ConnectionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListOperationsForConnectionResponse>;
    /**
     * Update an operation
     */
    updateOperation(req: shared.OperationUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateOperationResponse>;
}
