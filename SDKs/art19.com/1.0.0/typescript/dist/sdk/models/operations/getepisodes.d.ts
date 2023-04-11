import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GetEpisodesSortEnum {
    CreatedAt = "created_at",
    EarliestReleasedAt = "earliest_released_at",
    ReleasedAt = "released_at",
    ReleasedOrCreatedAt = "released_or_created_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}
export declare class GetEpisodesRequest extends SpeakeasyBase {
    /**
     * The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
     *
     * @remarks
     * The brackets *MUST* be percent-encoded, per the requirements in
     * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
     *
     */
    ids?: string[];
    /**
     * Limit the result to episodes usable with an inventory management calendar for the provided AdDeal ID.
     */
    includedInInventoryCalendar?: string;
    /**
     * Limit the result to episodes released in this month.
     */
    month?: string;
    /**
     * Select which page number to receive results for. Pages are numbered starting at 1.
     *
     * @remarks
     *
     *
     */
    pageNumber: number;
    /**
     * Indicate how many records to return per page. The maximum is 100.
     *
     * @remarks
     *
     *
     */
    pageSize: number;
    /**
     * If `true`, limit the result to published episodes only.
     *
     * @remarks
     * If `false`, limit the result to _unpublished_ episodes only.
     *
     */
    published?: boolean;
    /**
     * Limit the result to episodes with a title containing this parameter in a case-insensitive way.
     */
    q?: string;
    /**
     * Limit the result to episodes released after this timestamp.
     */
    releasedAfter?: Date;
    /**
     * Limit the result to episodes released before this timestamp.
     */
    releasedBefore?: Date;
    /**
     * If `true`, limit the result to published and released episodes holding an available media file.
     *
     * @remarks
     * If this is `true`, it also changes the default sort order to `-released_at`.
     *
     */
    rss?: boolean;
    /**
     * Limit result to episodes linked to this season.
     */
    seasonId?: string;
    /**
     * Limit the result to episodes linked to this series.
     */
    seriesId?: string;
    /**
     * Specify how to sort the result. Please refer to either the top section or the
     *
     * @remarks
     * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
     *
     */
    sort?: GetEpisodesSortEnum[];
    /**
     * Limit the result to episodes released in this year.
     */
    year?: string;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetEpisodes400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    /**
     * A string indicating which URI query parameter caused the error.
     */
    parameter?: string;
    /**
     * A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).
     *
     * @remarks
     *
     */
    pointer?: string;
}
export declare class GetEpisodes400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    /**
     * An application-specific error code, expressed as a string value
     */
    code?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.
     *
     * @remarks
     *
     */
    detail?: string;
    /**
     * An object containing references to the source of the error, optionally including any of the following members.
     *
     * @remarks
     *
     */
    source?: GetEpisodes400ApplicationVndApiPlusJsonErrorsSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value: 400
     */
    status?: string;
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the
     *
     * @remarks
     * problem, except for purposes of localization.
     *
     */
    title?: string;
}
/**
 * Bad Request
 *
 * @remarks
 *
 * Parameters requiring a specific format must adhere to that format.
 * Pagination must be present and have a positive page number and a page size no larger than 100. One initial filter must be provided (`ids`, `series_id`, or `season_id`).
 *
 */
export declare class GetEpisodes400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetEpisodes400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetEpisodes200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode[];
    links?: shared.Links;
}
export declare class GetEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getEpisodes200ApplicationVndApiPlusJsonObject?: GetEpisodes200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must be present and have a positive page number and a page size no larger than 100. One initial filter must be provided (`ids`, `series_id`, or `season_id`).
     *
     */
    getEpisodes400ApplicationVndApiPlusJsonObject?: GetEpisodes400ApplicationVndApiPlusJson;
}
