import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Verification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postDeleteBankAccounts - Delete bank accounts.
     *
     * Deletes one or more bank accounts of an account holder.
    **/
    postDeleteBankAccounts(req: operations.PostDeleteBankAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteBankAccountsResponse>;
    /**
     * postDeleteShareholders - Delete shareholders.
     *
     * Deletes one or more shareholders from an account holder.
    **/
    postDeleteShareholders(req: operations.PostDeleteShareholdersRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteShareholdersResponse>;
    /**
     * postDeleteSignatories - Delete signatories.
     *
     * Deletes one or more signatories from an account holder.
    **/
    postDeleteSignatories(req: operations.PostDeleteSignatoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSignatoriesResponse>;
    /**
     * postGetUploadedDocuments - Get documents.
     *
     * Retrieves documents that were previously uploaded for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
     *
    **/
    postGetUploadedDocuments(req: operations.PostGetUploadedDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetUploadedDocumentsResponse>;
    /**
     * postUploadDocument - Upload a document.
     *
     * Uploads a document for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
    **/
    postUploadDocument(req: operations.PostUploadDocumentRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadDocumentResponse>;
}
