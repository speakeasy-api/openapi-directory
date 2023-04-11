import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNetworksSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare enum GetNetworksAdDealStatusEnum {
    Active = "active",
    Inactive = "inactive",
    PendingActive = "pending_active",
    PendingInactive = "pending_inactive"
}
export declare enum GetNetworksSortEnum {
    CreatedAt = "created_at",
    Name = "name",
    UpdatedAt = "updated_at"
}
export declare class GetNetworksRequest extends SpeakeasyBase {
    /**
     * Limit the result to networks containing at least one series with an ad deal matching one of the
     *
     * @remarks
     * values in this parameter.
     *
     */
    adDealStatus?: GetNetworksAdDealStatusEnum[];
    /**
     * Limit the result to networks containing at least one series with an ad deal of this Ad Ops profile.
     *
     * @remarks
     *
     */
    adRepAccountId?: string;
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
     * Limit the result to networks with a name containing this parameter in a case-insensitive way.
     */
    q?: string;
    /**
     * Specify how to sort the result. Please refer to either the top section or the
     *
     * @remarks
     * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
     *
     */
    sort?: GetNetworksSortEnum[];
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
 * @remarks
 *
 */
export declare class GetNetworks400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
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
export declare class GetNetworks400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
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
    source?: GetNetworks400ApplicationVndApiPlusJsonErrorsSource;
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
export declare class GetNetworks400ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * An error object describing the problem. Please check out the
     *
     * @remarks
     * [JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full
     * description of the returned object.
     *
     */
    errors?: GetNetworks400ApplicationVndApiPlusJsonErrors[];
}
/**
 * Success
 */
export declare class GetNetworks200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Network[];
    links?: shared.Links;
}
export declare class GetNetworksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getNetworks200ApplicationVndApiPlusJsonObject?: GetNetworks200ApplicationVndApiPlusJson;
    /**
     * Bad Request
     *
     * @remarks
     *
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100.
     *
     */
    getNetworks400ApplicationVndApiPlusJsonObject?: GetNetworks400ApplicationVndApiPlusJson;
}
