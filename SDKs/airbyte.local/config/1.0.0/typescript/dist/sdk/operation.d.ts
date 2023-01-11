import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Operation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkOperation - Check if an operation to be created is valid
    **/
    checkOperation(req: operations.CheckOperationRequest, config?: AxiosRequestConfig): Promise<operations.CheckOperationResponse>;
    /**
     * createOperation - Create an operation to be applied as part of a connection pipeline
    **/
    createOperation(req: operations.CreateOperationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOperationResponse>;
    /**
     * deleteOperation - Delete an operation
    **/
    deleteOperation(req: operations.DeleteOperationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOperationResponse>;
    /**
     * getOperation - Returns an operation
    **/
    getOperation(req: operations.GetOperationRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    /**
     * listOperationsForConnection - Returns all operations for a connection.
     *
     * List operations for connection.
    **/
    listOperationsForConnection(req: operations.ListOperationsForConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsForConnectionResponse>;
    /**
     * updateOperation - Update an operation
    **/
    updateOperation(req: operations.UpdateOperationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOperationResponse>;
}
