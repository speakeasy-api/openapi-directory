import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Profile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bookmark an item under the active profile.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
     */
    bookmarkItem(req: operations.BookmarkItemRequest, security: operations.BookmarkItemSecurity, config?: AxiosRequestConfig): Promise<operations.BookmarkItemResponse>;
    /**
     * Unbookmark an item under the active profile.
     */
    deleteItemBookmark(req: operations.DeleteItemBookmarkRequest, security: operations.DeleteItemBookmarkSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteItemBookmarkResponse>;
    /**
     * Remove the watched status of items under the active profile. Passing in
     * specific `itemId`s to the `item_ids` query parameter will cause only these
     * items to be removed. **If this list is missing all watched items will be
     * removed**
     *
     */
    deleteWatched(req: operations.DeleteWatchedRequest, security: operations.DeleteWatchedSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWatchedResponse>;
    /**
     * Returns the list of bookmarked items under the active profile.
     */
    getBookmarkList(req: operations.GetBookmarkListRequest, security: operations.GetBookmarkListSecurity, config?: AxiosRequestConfig): Promise<operations.GetBookmarkListResponse>;
    /**
     * Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
     */
    getBookmarks(req: operations.GetBookmarksRequest, security: operations.GetBookmarksSecurity, config?: AxiosRequestConfig): Promise<operations.GetBookmarksResponse>;
    /**
     * Returns a list of items which have been watched but not completed under the active
     * profile.
     *
     * Multiple episodes under the same show may be watched or in progress, however only a
     * single item belonging to a particular show will be included in the returned list.
     *
     * The next episode to continue watching for a particular show will be the most recent
     * incompletely watched episode, or the next episode following the most recently
     * completely watched episode. Based on the specified `show_item_type` type, either the next
     * episode, the season of the next episode, or the show will be included in the list.
     *
     */
    getContinueWatchingList(req: operations.GetContinueWatchingListRequest, security: operations.GetContinueWatchingListSecurity, config?: AxiosRequestConfig): Promise<operations.GetContinueWatchingListResponse>;
    /**
     * Get the bookmark for an item under the active profile.
     */
    getItemBookmark(req: operations.GetItemBookmarkRequest, security: operations.GetItemBookmarkSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemBookmarkResponse>;
    /**
     * Get the rating info for an item under the active profile.
     */
    getItemRating(req: operations.GetItemRatingRequest, security: operations.GetItemRatingSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemRatingResponse>;
    /**
     * Get the watched status info for an item under the active profile.
     */
    getItemWatchedStatus(req: operations.GetItemWatchedStatusRequest, security: operations.GetItemWatchedStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemWatchedStatusResponse>;
    /**
     * Returns the next item to play given a source item id.
     *
     * For an unwatched show it returns the first episode available to the account.
     *
     * For a watched show it returns the last incompletely watched episode by the profile,
     * or the episode that immediately follows the last completely watched episode
     * or nothing.
     *
     * For an episode it always returns the immediately following episode, if available to
     * the account, or nothing.
     *
     * If the response does not contain a `next` property then no item was found.
     *
     */
    getNextPlaybackItem(req: operations.GetNextPlaybackItemRequest, security: operations.GetNextPlaybackItemSecurity, config?: AxiosRequestConfig): Promise<operations.GetNextPlaybackItemResponse>;
    /**
     * Get the details of the active profile, including watched, bookmarked and rated items.
     */
    getProfile(req: operations.GetProfileRequest, security: operations.GetProfileSecurity, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * Get the map of rated item ids (itemId => rating out of 10) under the active profile.
     */
    getRatings(req: operations.GetRatingsRequest, security: operations.GetRatingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRatingsResponse>;
    /**
     * Returns the list of rated items under the active profile.
     */
    getRatingsList(req: operations.GetRatingsListRequest, security: operations.GetRatingsListSecurity, config?: AxiosRequestConfig): Promise<operations.GetRatingsListResponse>;
    /**
     * Get the map of watched item ids (itemId => last playhead position) under the active profile.
     */
    getWatched(req: operations.GetWatchedRequest, security: operations.GetWatchedSecurity, config?: AxiosRequestConfig): Promise<operations.GetWatchedResponse>;
    /**
     * Returns the list of watched items under the active profile.
     */
    getWatchedList(req: operations.GetWatchedListRequest, security: operations.GetWatchedListSecurity, config?: AxiosRequestConfig): Promise<operations.GetWatchedListResponse>;
    /**
     * Rate an item under the active profile.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
     */
    rateItem(req: operations.RateItemRequest, security: operations.RateItemSecurity, config?: AxiosRequestConfig): Promise<operations.RateItemResponse>;
    /**
     * Record the watched playhead position of a video under the active profile.
     *
     * Can be used later to resume a video from where it was last watched.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
     */
    setItemWatchedStatus(req: operations.SetItemWatchedStatusRequest, security: operations.SetItemWatchedStatusSecurity, config?: AxiosRequestConfig): Promise<operations.SetItemWatchedStatusResponse>;
}
