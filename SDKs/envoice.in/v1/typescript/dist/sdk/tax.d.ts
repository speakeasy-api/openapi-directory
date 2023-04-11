import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all taxes for the account
     */
    taxApiAll(req: operations.TaxApiAllRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiAllResponse>;
    /**
     * Delete an existing tax
     */
    taxApiDeleteForm(req: operations.TaxApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiDeleteFormResponse>;
    /**
     * Delete an existing tax
     */
    taxApiDeleteJson(req: operations.TaxApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiDeleteJsonResponse>;
    /**
     * Delete an existing tax
     */
    taxApiDeleteRaw(req: operations.TaxApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiDeleteRawResponse>;
    /**
     * Create a tax
     */
    taxApiNewForm(req: operations.TaxApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiNewFormResponse>;
    /**
     * Create a tax
     */
    taxApiNewJson(req: operations.TaxApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiNewJsonResponse>;
    /**
     * Create a tax
     */
    taxApiNewRaw(req: operations.TaxApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiNewRawResponse>;
    /**
     * Update an existing tax
     */
    taxApiUpdateForm(req: operations.TaxApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiUpdateFormResponse>;
    /**
     * Update an existing tax
     */
    taxApiUpdateJson(req: operations.TaxApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiUpdateJsonResponse>;
    /**
     * Update an existing tax
     */
    taxApiUpdateRaw(req: operations.TaxApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiUpdateRawResponse>;
}
