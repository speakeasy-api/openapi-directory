import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Content {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Identical to GET /account/profile/items/{itemId}/next route but for users
     * that are not logged in i.e. this endpoint does not require authorisation
     *
     */
    getAnonNextPlaybackItem(req: operations.GetAnonNextPlaybackItemRequest, config?: AxiosRequestConfig): Promise<operations.GetAnonNextPlaybackItemResponse>;
    /**
     * Returns the details of an item with the specified id.
     */
    getItem(req: operations.GetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetItemResponse>;
    /**
     * Returns the List of child summary items under an item.
     *
     * If the item is a Season then the children will be episodes and ordered by episode number.
     *
     * If the item is a Show then the children will be Seasons and ordered by season number.
     *
     * Returns 404 if no children found.
     *
     */
    getItemChildrenList(req: operations.GetItemChildrenListRequest, config?: AxiosRequestConfig): Promise<operations.GetItemChildrenListResponse>;
    /**
     * Returns the details of an item with the specified id.
     */
    getItemDownloadables(req: operations.GetItemDownloadablesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemDownloadablesResponse>;
    /**
     * Returns the list of items related to the parent item.
     *
     * Note for now, due to the size of the list being unknown, only a single page will be returned.
     *
     */
    getItemRelatedList(req: operations.GetItemRelatedListRequest, config?: AxiosRequestConfig): Promise<operations.GetItemRelatedListResponse>;
    /**
     * Get the media clip files associated with items.
     *
     */
    getItemsMediaClipFiles(req: operations.GetItemsMediaClipFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsMediaClipFilesResponse>;
    /**
     * Returns a list of items under the specified item list
     */
    getList(req: operations.GetListRequest, config?: AxiosRequestConfig): Promise<operations.GetListResponse>;
    /**
     * Returns an array of item lists with their first page of content resolved.
     */
    getLists(req: operations.GetListsRequest, config?: AxiosRequestConfig): Promise<operations.GetListsResponse>;
    /**
     * Get the free / public video files associated with an item given maximum resolution,
     * device type and one or more delivery types.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
     */
    getPublicItemMediaFiles(req: operations.GetPublicItemMediaFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicItemMediaFilesResponse>;
    /**
     * Returns schedules for a defined set of channels over a requested period.
     *
     * Schedules are requested in hour blocks and returned grouped by the channel
     * they belong to.
     *
     * For example, to load 12 hours of schedules for channels `4343` and `5234`,
     * on 21/2/2017 starting from 08:00.
     *
     * ```
     * channels=4343,5234
     * date=2017-02-21
     * hour=8
     * duration=12
     * ```
     *
     * Please remember that `date` and `hour` combined represent a normal datetime,
     * so they should be converted to UTC on the client - this will help to avoid
     * issues with EPG schedules near midnight.
     *
     * If a channel id is passed which doesn't exist then this endpoint will
     * return an empty schedule list for it. If instead we returned 404,
     * this would invalidate all other channel schedules in the same request
     * which would be unfriendly for clients presenting these channel schedules.
     *
     */
    getSchedules(req: operations.GetSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesResponse>;
    /**
     * Returns the details of a Plan with the specified id.
     */
    getPlansId(req: operations.GetPlansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlansIdResponse>;
    /**
     * Search the catalog of items and people.
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
}
