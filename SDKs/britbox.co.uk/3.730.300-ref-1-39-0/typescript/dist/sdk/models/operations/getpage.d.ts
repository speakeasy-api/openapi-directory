import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Only relevant when loading item detail pages as these embed a detailed item in the main page entry.
 *
 * @remarks
 *
 * If no value is specified no item dependencies are expanded.
 *
 * If 'children' is specified then the list of any direct children will be expanded. For example
 * seasons of a show or episodes of a season.
 *
 * If 'all' is specified then the parent chain will be expanded along with any child list at each level.
 * For example if an episode is specified then its season will be expanded and that season's episode list.
 * The season will have its show expanded and the show will have its season list expanded.
 *
 * The 'all' options is useful when you deep link into a show/season/episode for the first time as
 * it provides full context for navigating around the show page. Subsequent navigation around
 * children of the show should only need to request expand of children.
 *
 * If 'ancestors' is specified then only the parent chain is included
 *
 * If an expand is specified which is not relevant to the item type, it will be ignored.
 *
 */
export declare enum GetPageItemDetailExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors"
}
/**
 * Only relevant when loading show detail pages as these embed a detailed item in the main page entry.
 *
 * @remarks
 *
 * Since the introduction of the D1,2,3 templates this parameter is now somewhat redundant, or less
 * likely to have any effect. While it may still be useful in some cases, most of the time the season
 * selection will be dictated by the configuration of the rows scheduled on the show detail page.
 * This parameter will only take effect if there are rows used to schedule episodes of a season, like
 * D1,2,3, or if no rows have a value set for their `seasonOrder` custom field.
 *
 * Given a targeted show page, it can be useful to get the details of a child season. This option
 * provides a means to return the `first` or `latest` season of a show embedded in the page.
 *
 * The `expand` parameter also works here so for example you could land on a show page and request the
 * `item_detail_select_season=latest` along with `item_detail_expand=all`. This would then return the
 * detail of the latest season with its list of child episode summaries, and also expand
 * the detail of the show with its list of seasons summaries.
 *
 */
export declare enum GetPageItemDetailSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}
/**
 * Only relevant to page entries of type `TextEntry`.
 *
 * @remarks
 *
 * Converts the value of a text page entry to the specified format.
 *
 */
export declare enum GetPageTextEntryFormatEnum {
    Markdown = "markdown",
    Html = "html"
}
export declare class GetPageRequest extends SpeakeasyBase {
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
     * Only relevant when loading item detail pages as these embed a detailed item in the main page entry.
     *
     * @remarks
     *
     * If no value is specified no item dependencies are expanded.
     *
     * If 'children' is specified then the list of any direct children will be expanded. For example
     * seasons of a show or episodes of a season.
     *
     * If 'all' is specified then the parent chain will be expanded along with any child list at each level.
     * For example if an episode is specified then its season will be expanded and that season's episode list.
     * The season will have its show expanded and the show will have its season list expanded.
     *
     * The 'all' options is useful when you deep link into a show/season/episode for the first time as
     * it provides full context for navigating around the show page. Subsequent navigation around
     * children of the show should only need to request expand of children.
     *
     * If 'ancestors' is specified then only the parent chain is included
     *
     * If an expand is specified which is not relevant to the item type, it will be ignored.
     *
     */
    itemDetailExpand?: GetPageItemDetailExpandEnum;
    /**
     * Only relevant when loading show detail pages as these embed a detailed item in the main page entry.
     *
     * @remarks
     *
     * Since the introduction of the D1,2,3 templates this parameter is now somewhat redundant, or less
     * likely to have any effect. While it may still be useful in some cases, most of the time the season
     * selection will be dictated by the configuration of the rows scheduled on the show detail page.
     * This parameter will only take effect if there are rows used to schedule episodes of a season, like
     * D1,2,3, or if no rows have a value set for their `seasonOrder` custom field.
     *
     * Given a targeted show page, it can be useful to get the details of a child season. This option
     * provides a means to return the `first` or `latest` season of a show embedded in the page.
     *
     * The `expand` parameter also works here so for example you could land on a show page and request the
     * `item_detail_select_season=latest` along with `item_detail_expand=all`. This would then return the
     * detail of the latest season with its list of child episode summaries, and also expand
     * the detail of the show with its list of seasons summaries.
     *
     */
    itemDetailSelectSeason?: GetPageItemDetailSelectSeasonEnum;
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
     * The number of items to load when prefetching and paging each list in the page row.
     */
    listPageSize?: number;
    /**
     * The number of items to load when prefetching a continuous scroll list entry in a page.
     *
     * @remarks
     *
     * By default any list page entry with template pattern `/^CS\d+$/` will
     * be considered a continuous scroll list.
     *
     */
    listPageSizeLarge?: number;
    /**
     * The maximum number of lists to prefetch in the page.
     */
    maxListPrefetch?: number;
    /**
     * The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
     */
    maxRating?: string;
    /**
     * The path of the page to load, e.g. '/movies'.
     */
    path: string;
    /**
     * The list of segments to filter the response by.
     */
    segments?: string[];
    /**
     * The active subscription code.
     */
    sub?: string;
    /**
     * Only relevant to page entries of type `TextEntry`.
     *
     * @remarks
     *
     * Converts the value of a text page entry to the specified format.
     *
     */
    textEntryFormat?: GetPageTextEntryFormatEnum;
}
export declare class GetPageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The page requested.
     */
    page?: shared.Page;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
