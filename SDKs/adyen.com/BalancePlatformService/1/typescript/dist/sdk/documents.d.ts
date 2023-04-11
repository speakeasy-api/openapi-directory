import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a document
     *
     * @remarks
     * Deletes a document.
     */
    deleteDocumentsId(req: operations.DeleteDocumentsIdRequest, security: operations.DeleteDocumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentsIdResponse>;
    /**
     * Get a document
     *
     * @remarks
     * Returns a document.
     */
    getDocumentsId(req: operations.GetDocumentsIdRequest, security: operations.GetDocumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDocumentsIdResponse>;
    /**
     * Update a document
     *
     * @remarks
     * Updates a document.
     */
    patchDocumentsId(req: operations.PatchDocumentsIdRequest, security: operations.PatchDocumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchDocumentsIdResponse>;
    /**
     * Upload a document for verification checks
     *
     * @remarks
     * Uploads a document for verification checks.
     *
     *  Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.
     *
     *  You should only upload documents when Adyen requests additional information for the legal entity.
     */
    postDocuments(req: shared.DocumentInput, security: operations.PostDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostDocumentsResponse>;
}
