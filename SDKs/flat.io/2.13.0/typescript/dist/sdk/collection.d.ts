import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addScoreToCollection - Add a score to the collection
     *
     * This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
     * You must have the capability `canAddScores` on the provided `collection` to perform the action.
     *
    **/
    addScoreToCollection(req: operations.AddScoreToCollectionRequest, config?: AxiosRequestConfig): Promise<operations.AddScoreToCollectionResponse>;
    /**
     * createCollection - Create a new collection
     *
     * This method will create a new collection and add it to your `root` collection.
     *
    **/
    createCollection(req: operations.CreateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * deleteCollection - Delete the collection
     *
     * This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.
     *
    **/
    deleteCollection(req: operations.DeleteCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCollectionResponse>;
    /**
     * deleteScoreFromCollection - Delete a score from the collection
     *
     * This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
     * This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.
     *
    **/
    deleteScoreFromCollection(req: operations.DeleteScoreFromCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScoreFromCollectionResponse>;
    /**
     * editCollection - Update a collection's metadata
    **/
    editCollection(req: operations.EditCollectionRequest, config?: AxiosRequestConfig): Promise<operations.EditCollectionResponse>;
    /**
     * getCollection - Get collection details
    **/
    getCollection(req: operations.GetCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetCollectionResponse>;
    /**
     * listCollectionScores - List the scores contained in a collection
     *
     * Use this method to list the scores contained in a collection.
     * If no sort option is provided, the scores are sorted by `modificationDate` `desc`.
     *
    **/
    listCollectionScores(req: operations.ListCollectionScoresRequest, config?: AxiosRequestConfig): Promise<operations.ListCollectionScoresResponse>;
    /**
     * listCollections - List the collections
     *
     * Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
     * If no sort option is provided, the collections are sorted by `creationDate` `desc`.
     *
     * Note that this method will not include the `parent` collection in the listing.
     * For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.
     *
    **/
    listCollections(req: operations.ListCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCollectionsResponse>;
    /**
     * untrashCollection - Untrash a collection
     *
     * This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.
     *
    **/
    untrashCollection(req: operations.UntrashCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UntrashCollectionResponse>;
}
