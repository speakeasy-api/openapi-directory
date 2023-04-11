import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCreditsSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * Limit the result to credits linked to this type of entity only.
 *
 * @remarks
 * Depending on the privileges of the credential, this list might be further reduced to
 * only published entities.
 *
 */
export declare enum GetCreditsCreditableTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare enum GetCreditsSortEnum {
    CreatedAt = "created_at",
    Position = "position",
    UpdatedAt = "updated_at"
}
export declare class GetCreditsRequest extends SpeakeasyBase {
    /**
     * Limit the result to credits for the entity with this ID only. If the entity is not
     *
     * @remarks
     * published, the credential needs to have the right privilege to list the credits for it.
     *
     */
    creditableId?: string;
    /**
     * Limit the result to credits linked to this type of entity only.
     *
     * @remarks
     * Depending on the privileges of the credential, this list might be further reduced to
     * only published entities.
     *
     */
    creditableType?: GetCreditsCreditableTypeEnum;
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
     * Specify how to sort the result. Please refer to either the top section or the
     *
     * @remarks
     * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
     *
     */
    sort?: GetCreditsSortEnum[];
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetCredits400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
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
export declare class GetCredits400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
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
    source?: GetCredits400ApplicationVndApiPlusJsonErrorsSource;
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
 * Pagination must have a positive page number and a page size no larger than 100.
 *
 */
export declare class GetCredits400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetCredits400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetCredits200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Credit[];
    links?: shared.Links;
}
export declare class GetCreditsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getCredits200ApplicationVndApiPlusJsonObject?: GetCredits200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100.
     *
     */
    getCredits400ApplicationVndApiPlusJsonObject?: GetCredits400ApplicationVndApiPlusJson;
}
