import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImagesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetImagesRequest extends SpeakeasyBase {
    /**
     * The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
     *
     * @remarks
     * The brackets *MUST* be percent-encoded, per the requirements in
     * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
     *
     */
    ids: string[];
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetImages400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
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
export declare class GetImages400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
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
    source?: GetImages400ApplicationVndApiPlusJsonErrorsSource;
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
export declare class GetImages400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetImages400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetImages200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Image[];
    links?: shared.Links;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getImages200ApplicationVndApiPlusJsonObject?: GetImages200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100.
     *
     */
    getImages400ApplicationVndApiPlusJsonObject?: GetImages400ApplicationVndApiPlusJson;
}
