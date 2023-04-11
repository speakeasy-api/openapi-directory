import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationInclusionsSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * The type of classification that the classification inclusions are linked to.
 *
 * @remarks
 * Depending on the permissions of your credential, only a subset of these types are usable.
 *
 */
export declare enum GetClassificationInclusionsClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
/**
 * Limit the result to classification inclusions linked to this type of entity.
 */
export declare enum GetClassificationInclusionsClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare enum GetClassificationInclusionsSortEnum {
    ClassificationValue = "classification_value",
    CreatedAt = "created_at",
    Position = "position"
}
export declare class GetClassificationInclusionsRequest extends SpeakeasyBase {
    /**
     * Limit the result to classification inclusions linked to a classification with this ID.
     */
    classificationId?: string;
    /**
     * The type of classification that the classification inclusions are linked to.
     *
     * @remarks
     * Depending on the permissions of your credential, only a subset of these types are usable.
     *
     */
    classificationType?: GetClassificationInclusionsClassificationTypeEnum;
    /**
     * Limit the result to classification inclusions linked to a resource with this ID.
     *
     * @remarks
     * You will have to use this filter together with either `classified_type` or `classification_type`.
     *
     */
    classifiedId?: string;
    /**
     * Limit the result to classification inclusions linked to this type of entity.
     */
    classifiedType?: GetClassificationInclusionsClassifiedTypeEnum;
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
     * Limit the result to classification inclusions linked to a classification containing
     *
     * @remarks
     * the parameter value disregarding case.
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
    sort?: GetClassificationInclusionsSortEnum[];
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
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
export declare class GetClassificationInclusions400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
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
    source?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource;
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
 * Pagination must have a positive page number and a page size no larger than 100. At least one filter parameter is required.
 *
 */
export declare class GetClassificationInclusions400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetClassificationInclusions200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.ClassificationInclusion[];
    links?: shared.Links;
}
export declare class GetClassificationInclusionsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getClassificationInclusions200ApplicationVndApiPlusJsonObject?: GetClassificationInclusions200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100. At least one filter parameter is required.
     *
     */
    getClassificationInclusions400ApplicationVndApiPlusJsonObject?: GetClassificationInclusions400ApplicationVndApiPlusJson;
}
