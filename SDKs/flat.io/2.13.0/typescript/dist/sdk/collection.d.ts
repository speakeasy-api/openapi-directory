import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
 *
 * @remarks
 *   - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
 *   - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
 *   - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.
 *
 * All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).
 *
 * At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.
 *
 */
export declare class Collection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a score to the collection
     *
     * @remarks
     * This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
     * You must have the capability `canAddScores` on the provided `collection` to perform the action.
     *
     */
    addScoreToCollection(req: operations.AddScoreToCollectionRequest, security: operations.AddScoreToCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.AddScoreToCollectionResponse>;
    /**
     * Create a new collection
     *
     * @remarks
     * This method will create a new collection and add it to your `root` collection.
     *
     */
    createCollection(req: shared.CollectionCreation, security: operations.CreateCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * Delete the collection
     *
     * @remarks
     * This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.
     *
     */
    deleteCollection(req: operations.DeleteCollectionRequest, security: operations.DeleteCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCollectionResponse>;
    /**
     * Delete a score from the collection
     *
     * @remarks
     * This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
     * This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.
     *
     */
    deleteScoreFromCollection(req: operations.DeleteScoreFromCollectionRequest, security: operations.DeleteScoreFromCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScoreFromCollectionResponse>;
    /**
     * Update a collection's metadata
     */
    editCollection(req: operations.EditCollectionRequest, security: operations.EditCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.EditCollectionResponse>;
    /**
     * Get collection details
     */
    getCollection(req: operations.GetCollectionRequest, security: operations.GetCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetCollectionResponse>;
    /**
     * List the scores contained in a collection
     *
     * @remarks
     * Use this method to list the scores contained in a collection.
     * If no sort option is provided, the scores are sorted by `modificationDate` `desc`.
     *
     */
    listCollectionScores(req: operations.ListCollectionScoresRequest, security: operations.ListCollectionScoresSecurity, config?: AxiosRequestConfig): Promise<operations.ListCollectionScoresResponse>;
    /**
     * List the collections
     *
     * @remarks
     * Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
     * If no sort option is provided, the collections are sorted by `creationDate` `desc`.
     *
     * Note that this method will not include the `parent` collection in the listing.
     * For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.
     *
     */
    listCollections(req: operations.ListCollectionsRequest, security: operations.ListCollectionsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCollectionsResponse>;
    /**
     * Untrash a collection
     *
     * @remarks
     * This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.
     *
     */
    untrashCollection(req: operations.UntrashCollectionRequest, security: operations.UntrashCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.UntrashCollectionResponse>;
}
