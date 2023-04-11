import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all invoices for the account
     */
    invoiceApiAll(req: operations.InvoiceApiAllRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiAllResponse>;
    /**
     * Change invoice status
     */
    invoiceApiChangeStatusForm(req: operations.InvoiceApiChangeStatusFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiChangeStatusFormResponse>;
    /**
     * Change invoice status
     */
    invoiceApiChangeStatusJson(req: operations.InvoiceApiChangeStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiChangeStatusJsonResponse>;
    /**
     * Change invoice status
     */
    invoiceApiChangeStatusRaw(req: operations.InvoiceApiChangeStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiChangeStatusRawResponse>;
    /**
     * Delete an existing invoice
     */
    invoiceApiDeleteForm(req: operations.InvoiceApiDeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDeleteFormResponse>;
    /**
     * Delete an existing invoice
     */
    invoiceApiDeleteJson(req: operations.InvoiceApiDeleteJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDeleteJsonResponse>;
    /**
     * Delete an existing invoice
     */
    invoiceApiDeleteRaw(req: operations.InvoiceApiDeleteRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDeleteRawResponse>;
    /**
     * Return invoice data
     */
    invoiceApiDetails(req: operations.InvoiceApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDetailsResponse>;
    /**
     * Create an invoice
     */
    invoiceApiNewForm(req: operations.InvoiceApiNewFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiNewFormResponse>;
    /**
     * Create an invoice
     */
    invoiceApiNewJson(req: operations.InvoiceApiNewJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiNewJsonResponse>;
    /**
     * Create an invoice
     */
    invoiceApiNewRaw(req: operations.InvoiceApiNewRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiNewRawResponse>;
    /**
     * Return the PDF for the invoice
     */
    invoiceApiPdf(req: operations.InvoiceApiPdfRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiPdfResponse>;
    /**
     * Send the provided invoice to the accountant
     */
    invoiceApiSendToAccountantForm(req: operations.InvoiceApiSendToAccountantFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToAccountantFormResponse>;
    /**
     * Send the provided invoice to the accountant
     */
    invoiceApiSendToAccountantJson(req: operations.InvoiceApiSendToAccountantJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToAccountantJsonResponse>;
    /**
     * Send the provided invoice to the accountant
     */
    invoiceApiSendToAccountantRaw(req: operations.InvoiceApiSendToAccountantRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToAccountantRawResponse>;
    /**
     * Send the provided invoice to the client
     */
    invoiceApiSendToClientForm(req: operations.InvoiceApiSendToClientFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToClientFormResponse>;
    /**
     * Send the provided invoice to the client
     */
    invoiceApiSendToClientJson(req: operations.InvoiceApiSendToClientJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToClientJsonResponse>;
    /**
     * Send the provided invoice to the client
     */
    invoiceApiSendToClientRaw(req: operations.InvoiceApiSendToClientRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToClientRawResponse>;
    /**
     * Retrieve the status of the invoice
     */
    invoiceApiStatus(req: operations.InvoiceApiStatusRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiStatusResponse>;
    /**
     * Update an existing invoice
     */
    invoiceApiUpdateForm(req: operations.InvoiceApiUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiUpdateFormResponse>;
    /**
     * Update an existing invoice
     */
    invoiceApiUpdateJson(req: operations.InvoiceApiUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiUpdateJsonResponse>;
    /**
     * Update an existing invoice
     */
    invoiceApiUpdateRaw(req: operations.InvoiceApiUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiUpdateRawResponse>;
    /**
     * Return the unique url to the client's invoice
     */
    invoiceApiUri(req: operations.InvoiceApiUriRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiUriResponse>;
    /**
     * Return all invoice categories for the account
     */
    getApiInvoiceAllcategories(req: operations.GetApiInvoiceAllcategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiInvoiceAllcategoriesResponse>;
    /**
     * Delete an existing invoice category
     */
    postApiInvoiceDeletecategoryForm(req: operations.PostApiInvoiceDeletecategoryFormRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceDeletecategoryFormResponse>;
    /**
     * Delete an existing invoice category
     */
    postApiInvoiceDeletecategoryJson(req: operations.PostApiInvoiceDeletecategoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceDeletecategoryJsonResponse>;
    /**
     * Delete an existing invoice category
     */
    postApiInvoiceDeletecategoryRaw(req: operations.PostApiInvoiceDeletecategoryRawRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceDeletecategoryRawResponse>;
    /**
     * Create an invoice category
     */
    postApiInvoiceNewcategoryForm(req: operations.PostApiInvoiceNewcategoryFormRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceNewcategoryFormResponse>;
    /**
     * Create an invoice category
     */
    postApiInvoiceNewcategoryJson(req: operations.PostApiInvoiceNewcategoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceNewcategoryJsonResponse>;
    /**
     * Create an invoice category
     */
    postApiInvoiceNewcategoryRaw(req: operations.PostApiInvoiceNewcategoryRawRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceNewcategoryRawResponse>;
    /**
     * Update an existing invoice category
     */
    postApiInvoiceUpdatecategoryForm(req: operations.PostApiInvoiceUpdatecategoryFormRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceUpdatecategoryFormResponse>;
    /**
     * Update an existing invoice category
     */
    postApiInvoiceUpdatecategoryJson(req: operations.PostApiInvoiceUpdatecategoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceUpdatecategoryJsonResponse>;
    /**
     * Update an existing invoice category
     */
    postApiInvoiceUpdatecategoryRaw(req: operations.PostApiInvoiceUpdatecategoryRawRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceUpdatecategoryRawResponse>;
}
