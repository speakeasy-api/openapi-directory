import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Client {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all clients for the account
     */
    clientApiAll(req: operations.ClientApiAllRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiAllResponse>;
    /**
     * Check if the provided client can be deleted
     */
    clientApiCanDelete(req: operations.ClientApiCanDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiCanDeleteResponse>;
    /**
     * Delete an existing client
     */
    clientApiDeleteForm(req: operations.ClientApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDeleteFormResponse>;
    /**
     * Delete an existing client
     */
    clientApiDeleteJson(req: operations.ClientApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDeleteJsonResponse>;
    /**
     * Delete an existing client
     */
    clientApiDeleteRaw(req: operations.ClientApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDeleteRawResponse>;
    /**
     * Return client details. Activities and invoices included.
     */
    clientApiDetails(req: operations.ClientApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDetailsResponse>;
    /**
     * Create a client
     */
    clientApiNewForm(req: operations.ClientApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiNewFormResponse>;
    /**
     * Create a client
     */
    clientApiNewJson(req: operations.ClientApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiNewJsonResponse>;
    /**
     * Create a client
     */
    clientApiNewRaw(req: operations.ClientApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiNewRawResponse>;
    /**
     * Update an existing client
     */
    clientApiUpdateForm(req: operations.ClientApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiUpdateFormResponse>;
    /**
     * Update an existing client
     */
    clientApiUpdateJson(req: operations.ClientApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiUpdateJsonResponse>;
    /**
     * Update an existing client
     */
    clientApiUpdateRaw(req: operations.ClientApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiUpdateRawResponse>;
}
