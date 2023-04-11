import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GetClassificationsSortEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Value = "value"
}
/**
 * Limit the result to classifications of this type. The possible values for types
 *
 * @remarks
 * depends on the privileges of the provided credential.
 *
 */
export declare enum GetClassificationsTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare class GetClassificationsRequest extends SpeakeasyBase {
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
     * If this parameter is provided and not empty, limit the result to classifications
     *
     * @remarks
     * of type `Geography` representing countries. The credential must have at least one
     * privilege with a network, series, or advertiser profile.
     *
     */
    isCountry?: string;
    /**
     * Select which page number to receive results for. Pages are numbered starting at 1.
     *
     * @remarks
     *
     *
     */
    pageNumber?: number;
    /**
     * Indicate how many records to return per page. The maximum is 100.
     *
     * @remarks
     *
     *
     */
    pageSize?: number;
    /**
     * Limit the result to classifications with a value containing the parameter value
     *
     * @remarks
     * disregarding case.
     *
     */
    q?: string;
    /**
     * Specify how to sort the result. Please refer to either the top section or the
     *
     * @remarks
     * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
     *
     */
    sort?: GetClassificationsSortEnum[];
    /**
     * Limit the result to classifications of this type. The possible values for types
     *
     * @remarks
     * depends on the privileges of the provided credential.
     *
     */
    type?: GetClassificationsTypeEnum;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetClassifications400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
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
export declare class GetClassifications400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
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
    source?: GetClassifications400ApplicationVndApiPlusJsonErrorsSource;
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
 * Pagination must have a positive page number and a page size no larger than 100. Filtering by type for AudienceSegment, AudienceTag, ListeningPlatform, and UserDevice is no longer supported.
 *
 */
export declare class GetClassifications400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetClassifications400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetClassifications200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Classification[];
    links?: shared.Links;
}
export declare class GetClassificationsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getClassifications200ApplicationVndApiPlusJsonObject?: GetClassifications200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100. Filtering by type for AudienceSegment, AudienceTag, ListeningPlatform, and UserDevice is no longer supported.
     *
     */
    getClassifications400ApplicationVndApiPlusJsonObject?: GetClassifications400ApplicationVndApiPlusJson;
}
