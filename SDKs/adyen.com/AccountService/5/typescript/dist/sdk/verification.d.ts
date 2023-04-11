import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Verification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Trigger verification
     *
     * @remarks
     * Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.
     */
    postCheckAccountHolder(req: shared.PerformVerificationRequest, security: operations.PostCheckAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostCheckAccountHolderResponse>;
    /**
     * Delete bank accounts
     *
     * @remarks
     * Deletes bank accounts associated with an account holder.
     */
    postDeleteBankAccounts(req: shared.DeleteBankAccountRequest, security: operations.PostDeleteBankAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeleteBankAccountsResponse>;
    /**
     * Delete legal arrangements
     *
     * @remarks
     * Deletes legal arrangements and/or legal arrangement entities associated with an account holder.
     */
    postDeleteLegalArrangements(req: shared.DeleteLegalArrangementRequest, security: operations.PostDeleteLegalArrangementsSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeleteLegalArrangementsResponse>;
    /**
     * Delete payout methods
     *
     * @remarks
     * Deletes payout methods associated with an account holder.
     */
    postDeletePayoutMethods(req: shared.DeletePayoutMethodRequest, security: operations.PostDeletePayoutMethodsSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeletePayoutMethodsResponse>;
    /**
     * Delete shareholders
     *
     * @remarks
     * Deletes shareholders associated with an account holder.
     */
    postDeleteShareholders(req: shared.DeleteShareholderRequest, security: operations.PostDeleteShareholdersSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeleteShareholdersResponse>;
    /**
     * Delete signatories
     *
     * @remarks
     * Deletes signatories associated with an account holder.
     */
    postDeleteSignatories(req: shared.DeleteSignatoriesRequest, security: operations.PostDeleteSignatoriesSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeleteSignatoriesResponse>;
    /**
     * Get documents
     *
     * @remarks
     * Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
     *
     */
    postGetUploadedDocuments(req: shared.GetUploadedDocumentsRequest, security: operations.PostGetUploadedDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetUploadedDocumentsResponse>;
    /**
     * Upload a document
     *
     * @remarks
     * Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
     */
    postUploadDocument(req: shared.UploadDocumentRequest, security: operations.PostUploadDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.PostUploadDocumentResponse>;
}
