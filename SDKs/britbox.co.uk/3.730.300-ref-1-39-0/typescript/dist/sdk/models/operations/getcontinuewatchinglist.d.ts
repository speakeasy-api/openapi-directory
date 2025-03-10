import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinueWatchingListSecurity extends SpeakeasyBase {
    profileAuth: string;
}
export declare enum GetContinueWatchingListIncludeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}
/**
 * The item type to be returned for continue watching items belonging to a show.
 *
 * @remarks
 *
 * Multiple episodes under the same show may be watched or in progress, however only a
 * single item belonging to a particular show will be included in the returned list.
 *
 * The next episode to continue watching for a particular show will be the most recent
 * incompletely watched episode, or the next episode following the most recently
 * completely watched episode. Based on the specified `show_item_type` type, either the next
 * episode, the season of the next episode, or the show will be included in the list.
 *
 * If `episode` is specified, then only the next episode to continue watching for a
 * show will be returned.
 *
 * If `season` is specified, then only the season of the next episode will be returned.
 *
 * If `show` is specified, then only the show of the next episode will be returned
 *
 * The recommended value of this parameter should reflect the desitination the
 * user will be sent to when they select this item in the list. So if a user will
 * be sent to the show detail page then this should be `show` and you can use
 * the `include` parameter to get metadata about the episode or season if needed
 *
 */
export declare enum GetContinueWatchingListShowItemTypeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}
export declare class GetContinueWatchingListRequest extends SpeakeasyBase {
    /**
     * The type of device the content is targeting.
     */
    device?: string;
    /**
     * The set of opt in feature flags which cause breaking changes to responses.
     *
     * @remarks
     *
     * While Rocket APIs look to avoid breaking changes under the active major version, the formats of responses
     * may need to evolve over this time.
     *
     * These feature flags allow clients to select which response formats they expect and avoid breaking
     * clients as these formats evolve under the current major version.
     *
     * ### Flags
     *
     * - `all` - Enable all flags. Useful for testing. _Don't use in production_.
     * - `idp` - Dynamic item detail pages with schedulable rows.
     * - `ldp` - Dynamic list detail pages with schedulable rows.
     * - `hb` - Hubble formatted image urls.
     * - `rpt` - Updated resume point threshold logic.
     * - `cas` - "Custom Asset Search", inlcude `customAssets` in search results.
     * - `lrl` - Do not pre-populate related list if more than `max_list_prefetch` down the page.
     * - `cd` - Custom Destination support.
     *
     * See the `feature-flags.md` for available flag details.
     *
     */
    ff?: shared.FeatureFlagsEnum[];
    /**
     * Include one opr more ancestor/children for items belonging to a show. Extra items
     *
     * @remarks
     * will be populated in the `listData` property of the list
     *
     * If no value is specified no dependencies are included.
     *
     * If `episode` is specified, then the next episode will be added for season/show
     * items. Has no effect if `show_item_type` is set to `episode`.
     *
     * If `season` is specified, then the season of the next episode will be added for
     * episode/show items. Has no effect if `show_item_type` is set to `season`.
     *
     * If `show` is specified, then the show of the next episode will be added for
     * episode/season items. Has no effect if `show_item_type` is set to `show`.
     *
     */
    include?: GetContinueWatchingListIncludeEnum[];
    /**
     * Language code for the preferred language to be returned in the response.
     *
     * @remarks
     *
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     *
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     *
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    lang?: string;
    /**
     * The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.
     */
    maxRating?: string;
    /**
     * The page of items to load. Starts from page 1.
     */
    page?: number;
    /**
     * The number of items to return in a page.
     */
    pageSize?: number;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The item type to be returned for continue watching items belonging to a show.
     *
     * @remarks
     *
     * Multiple episodes under the same show may be watched or in progress, however only a
     * single item belonging to a particular show will be included in the returned list.
     *
     * The next episode to continue watching for a particular show will be the most recent
     * incompletely watched episode, or the next episode following the most recently
     * completely watched episode. Based on the specified `show_item_type` type, either the next
     * episode, the season of the next episode, or the show will be included in the list.
     *
     * If `episode` is specified, then only the next episode to continue watching for a
     * show will be returned.
     *
     * If `season` is specified, then only the season of the next episode will be returned.
     *
     * If `show` is specified, then only the show of the next episode will be returned
     *
     * The recommended value of this parameter should reflect the desitination the
     * user will be sent to when they select this item in the list. So if a user will
     * be sent to the show detail page then this should be `show` and you can use
     * the `include` parameter to get metadata about the episode or season if needed
     *
     */
    showItemType?: GetContinueWatchingListShowItemTypeEnum;
    /**
     * The active subscription code.
     */
    sub?: string;
}
export declare class GetContinueWatchingListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The list of items requested.
     */
    itemList?: shared.ItemList;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
