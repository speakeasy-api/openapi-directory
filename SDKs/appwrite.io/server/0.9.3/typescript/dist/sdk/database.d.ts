import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Database service allows you to create structured collections of documents, query and filter lists of documents
 */
export declare class Database {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Collection
     *
     * @remarks
     * Create a new Collection.
     */
    databaseCreateCollection(req: operations.DatabaseCreateCollectionRequestBody, security: operations.DatabaseCreateCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateCollectionResponse>;
    /**
     * Create Document
     *
     * @remarks
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
     */
    databaseCreateDocument(req: operations.DatabaseCreateDocumentRequest, security: operations.DatabaseCreateDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateDocumentResponse>;
    /**
     * Delete Collection
     *
     * @remarks
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     */
    databaseDeleteCollection(req: operations.DatabaseDeleteCollectionRequest, security: operations.DatabaseDeleteCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteCollectionResponse>;
    /**
     * Delete Document
     *
     * @remarks
     * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
     */
    databaseDeleteDocument(req: operations.DatabaseDeleteDocumentRequest, security: operations.DatabaseDeleteDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteDocumentResponse>;
    /**
     * Get Collection
     *
     * @remarks
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     */
    databaseGetCollection(req: operations.DatabaseGetCollectionRequest, security: operations.DatabaseGetCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseGetCollectionResponse>;
    /**
     * Get Document
     *
     * @remarks
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     */
    databaseGetDocument(req: operations.DatabaseGetDocumentRequest, security: operations.DatabaseGetDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseGetDocumentResponse>;
    /**
     * List Collections
     *
     * @remarks
     * Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).
     */
    databaseListCollections(req: operations.DatabaseListCollectionsRequest, security: operations.DatabaseListCollectionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseListCollectionsResponse>;
    /**
     * List Documents
     *
     * @remarks
     * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
     */
    databaseListDocuments(req: operations.DatabaseListDocumentsRequest, security: operations.DatabaseListDocumentsSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseListDocumentsResponse>;
    /**
     * Update Collection
     *
     * @remarks
     * Update a collection by its unique ID.
     */
    databaseUpdateCollection(req: operations.DatabaseUpdateCollectionRequest, security: operations.DatabaseUpdateCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateCollectionResponse>;
    /**
     * Update Document
     *
     * @remarks
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     */
    databaseUpdateDocument(req: operations.DatabaseUpdateDocumentRequest, security: operations.DatabaseUpdateDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateDocumentResponse>;
}
