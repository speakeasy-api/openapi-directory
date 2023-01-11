import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDocumentsId - Delete a document.
     *
     * Deletes a document.
    **/
    deleteDocumentsId(req: operations.DeleteDocumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentsIdResponse>;
    /**
     * getDocumentsId - Retrieve a document.
     *
     * Returns a specific document.
    **/
    getDocumentsId(req: operations.GetDocumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentsIdResponse>;
    /**
     * patchDocumentsId - Update a document.
     *
     * Updates a specific document.
    **/
    patchDocumentsId(req: operations.PatchDocumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDocumentsIdResponse>;
    /**
     * postDocuments - Upload a document for verification checks.
     *
     * Uploads a document for verification checks. Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/legalEntities) to run automated Know Your Customer checks. If these checks fail, your Adyen contact will inform you so you can provide additional documents. Adyen uses the documents to validate the identity of the individual or organization legal entity, or the legal entity's bank account details.
     *
     *  You should only upload documents when your Adyen contact informs you to provide additional information for the legal entity. For more information, refer to [Onboard and verify account holders](https://docs.adyen.com/issuing/kyc-verification).
    **/
    postDocuments(req: operations.PostDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostDocumentsResponse>;
}
