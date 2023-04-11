import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Document object represents your invoice.
 */
export declare class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel a document
     *
     * @remarks
     * Cancel a document. Returns a cancellation document object if the cancellation is succeded.
     */
    cancelDocument(req: operations.CancelDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CancelDocumentResponse>;
    /**
     * Create a document
     *
     * @remarks
     * Create a new document. Returns a document object if the create is succeded.
     */
    createDocument(req: shared.DocumentInsert, config?: AxiosRequestConfig): Promise<operations.CreateDocumentResponse>;
    /**
     * Create a document from proforma.
     *
     * @remarks
     * Create a new document from proforma. Returns a document object if the create is succeded.
     */
    createDocumentFromProforma(req: operations.CreateDocumentFromProformaRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentFromProformaResponse>;
    /**
     * Delete all payment history on document
     *
     * @remarks
     * Delete all exist payment history on document.
     */
    deletePayment(req: operations.DeletePaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeletePaymentResponse>;
    /**
     * Download a document in PDF format.
     *
     * @remarks
     * Download a document. Returns a document in PDF format.
     */
    downloadDocument(req: operations.DownloadDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DownloadDocumentResponse>;
    /**
     * Retrieve a document
     *
     * @remarks
     * Retrieves the details of an existing document.
     */
    getDocument(req: operations.GetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResponse>;
    /**
     * Retrieve a document Online Számla status
     *
     * @remarks
     * Retrieves the details of an existing document status.
     */
    getOnlineSzamlaStatus(req: operations.GetOnlineSzamlaStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetOnlineSzamlaStatusResponse>;
    /**
     * Retrieve a payment histroy
     *
     * @remarks
     * Retrieves the details of payment history an existing document.
     */
    getPayment(req: operations.GetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * Retrieve a document download public url.
     *
     * @remarks
     * Retrieves public url to download an existing document.
     */
    getPublicUrl(req: operations.GetPublicUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicUrlResponse>;
    /**
     * List all documents
     *
     * @remarks
     * Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.
     */
    listDocument(req: operations.ListDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentResponse>;
    /**
     * Send invoice to given email adresses.
     *
     * @remarks
     * Returns a list of emails, where the invoice is sent.
     */
    sendDocument(req: operations.SendDocumentRequest, config?: AxiosRequestConfig): Promise<operations.SendDocumentResponse>;
    /**
     * Update payment history
     *
     * @remarks
     * Update payment history an existing document. Returns a payment history object if the update is succeded.
     */
    updatePayment(req: operations.UpdatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentResponse>;
}
