import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WorkType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all work types for the account
     */
    workTypeApiAll(req: operations.WorkTypeApiAllRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiAllResponse>;
    /**
     * Delete an existing work type
     */
    workTypeApiDeleteForm(req: operations.WorkTypeApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDeleteFormResponse>;
    /**
     * Delete an existing work type
     */
    workTypeApiDeleteJson(req: operations.WorkTypeApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDeleteJsonResponse>;
    /**
     * Delete an existing work type
     */
    workTypeApiDeleteRaw(req: operations.WorkTypeApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDeleteRawResponse>;
    /**
     * Return work type details
     */
    workTypeApiDetails(req: operations.WorkTypeApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDetailsResponse>;
    /**
     * Create a work type
     */
    workTypeApiNewForm(req: operations.WorkTypeApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiNewFormResponse>;
    /**
     * Create a work type
     */
    workTypeApiNewJson(req: operations.WorkTypeApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiNewJsonResponse>;
    /**
     * Create a work type
     */
    workTypeApiNewRaw(req: operations.WorkTypeApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiNewRawResponse>;
    /**
     * Return all work types for the account that match the query param
     */
    workTypeApiSearch(req: operations.WorkTypeApiSearchRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiSearchResponse>;
    /**
     * Update an existing work type
     */
    workTypeApiUpdateForm(req: operations.WorkTypeApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiUpdateFormResponse>;
    /**
     * Update an existing work type
     */
    workTypeApiUpdateJson(req: operations.WorkTypeApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiUpdateJsonResponse>;
    /**
     * Update an existing work type
     */
    workTypeApiUpdateRaw(req: operations.WorkTypeApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiUpdateRawResponse>;
}
