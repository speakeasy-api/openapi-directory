import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelDocument - Cancel a document
     *
     * Cancel a document. Returns a cancellation document object if the cancellation is succeded.
    **/
    cancelDocument(req: operations.CancelDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CancelDocumentResponse>;
    /**
     * createDocument - Create a document
     *
     * Create a new document. Returns a document object if the create is succeded.
    **/
    createDocument(req: operations.CreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentResponse>;
    /**
     * createDocumentFromProforma - Create a document from proforma.
     *
     * Create a new document from proforma. Returns a document object if the create is succeded.
    **/
    createDocumentFromProforma(req: operations.CreateDocumentFromProformaRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentFromProformaResponse>;
    /**
     * deletePayment - Delete all payment history on document
     *
     * Delete all exist payment history on document.
    **/
    deletePayment(req: operations.DeletePaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeletePaymentResponse>;
    /**
     * downloadDocument - Download a document in PDF format.
     *
     * Download a document. Returns a document in PDF format.
    **/
    downloadDocument(req: operations.DownloadDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DownloadDocumentResponse>;
    /**
     * getDocument - Retrieve a document
     *
     * Retrieves the details of an existing document.
    **/
    getDocument(req: operations.GetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResponse>;
    /**
     * getOnlineSzamlaStatus - Retrieve a document Online Számla status
     *
     * Retrieves the details of an existing document status.
    **/
    getOnlineSzamlaStatus(req: operations.GetOnlineSzamlaStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetOnlineSzamlaStatusResponse>;
    /**
     * getPayment - Retrieve a payment histroy
     *
     * Retrieves the details of payment history an existing document.
    **/
    getPayment(req: operations.GetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * getPublicUrl - Retrieve a document download public url.
     *
     * Retrieves public url to download an existing document.
    **/
    getPublicUrl(req: operations.GetPublicUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicUrlResponse>;
    /**
     * listDocument - List all documents
     *
     * Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.
    **/
    listDocument(req: operations.ListDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentResponse>;
    /**
     * sendDocument - Send invoice to given email adresses.
     *
     * Returns a list of emails, where the invoice is sent.
    **/
    sendDocument(req: operations.SendDocumentRequest, config?: AxiosRequestConfig): Promise<operations.SendDocumentResponse>;
    /**
     * updatePayment - Update payment history
     *
     * Update payment history an existing document. Returns a payment history object if the update is succeded.
    **/
    updatePayment(req: operations.UpdatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentResponse>;
}
