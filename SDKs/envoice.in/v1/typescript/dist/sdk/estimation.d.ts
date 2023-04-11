import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Estimation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all estimation for the account
     */
    estimationApiAll(req: operations.EstimationApiAllRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiAllResponse>;
    /**
     * Change estimation status
     */
    estimationApiChangeStatusForm(req: operations.EstimationApiChangeStatusFormRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiChangeStatusFormResponse>;
    /**
     * Change estimation status
     */
    estimationApiChangeStatusJson(req: operations.EstimationApiChangeStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiChangeStatusJsonResponse>;
    /**
     * Change estimation status
     */
    estimationApiChangeStatusRaw(req: operations.EstimationApiChangeStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiChangeStatusRawResponse>;
    /**
     * Delete an existing estimation
     */
    estimationApiDeleteForm(req: operations.EstimationApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDeleteFormResponse>;
    /**
     * Delete an existing estimation
     */
    estimationApiDeleteJson(req: operations.EstimationApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDeleteJsonResponse>;
    /**
     * Delete an existing estimation
     */
    estimationApiDeleteRaw(req: operations.EstimationApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDeleteRawResponse>;
    /**
     * Return estimation data
     */
    estimationApiDetails(req: operations.EstimationApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDetailsResponse>;
    /**
     * Create an estimation
     */
    estimationApiNewForm(req: operations.EstimationApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiNewFormResponse>;
    /**
     * Create an estimation
     */
    estimationApiNewJson(req: operations.EstimationApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiNewJsonResponse>;
    /**
     * Create an estimation
     */
    estimationApiNewRaw(req: operations.EstimationApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiNewRawResponse>;
    /**
     * Send the provided estimation to the client
     */
    estimationApiSendToClientForm(req: operations.EstimationApiSendToClientFormRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiSendToClientFormResponse>;
    /**
     * Send the provided estimation to the client
     */
    estimationApiSendToClientJson(req: operations.EstimationApiSendToClientJsonRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiSendToClientJsonResponse>;
    /**
     * Send the provided estimation to the client
     */
    estimationApiSendToClientRaw(req: operations.EstimationApiSendToClientRawRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiSendToClientRawResponse>;
    /**
     * Retrieve the status of the estimation
     */
    estimationApiStatus(req: operations.EstimationApiStatusRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiStatusResponse>;
    /**
     * Update an existing estimation
     */
    estimationApiUpdateForm(req: operations.EstimationApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiUpdateFormResponse>;
    /**
     * Update an existing estimation
     */
    estimationApiUpdateJson(req: operations.EstimationApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiUpdateJsonResponse>;
    /**
     * Update an existing estimation
     */
    estimationApiUpdateRaw(req: operations.EstimationApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiUpdateRawResponse>;
    /**
     * Return the unique url to the client's invoice
     */
    estimationApiUri(req: operations.EstimationApiUriRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiUriResponse>;
}
