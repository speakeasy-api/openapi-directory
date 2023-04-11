import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItineraryPriceMetricsRequest extends SpeakeasyBase {
    /**
     * the preferred currency for display. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
     */
    currencyCode?: string;
    /**
     * The date on which the traveler will depart from the origin to go to the destination.
     *
     * @remarks
     *
     * Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.
     */
    departureDate: string;
    /**
     * airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), to which the traveler is going.
     */
    destinationIataCode: string;
    /**
     * true to get price metrics for a one way trip,
     *
     * @remarks
     * false to get price metrics for a round trip
     */
    oneWay?: boolean;
    /**
     * airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), from which the traveler will depart
     *
     * @remarks
     *
     */
    originIataCode: string;
}
export declare enum GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonLinksMethodsEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS"
}
/**
 * Links related to the returned objects(s)
 */
export declare class GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonLinks extends SpeakeasyBase {
    /**
     * URL value
     */
    href?: string;
    /**
     * HTTP methods supported by the sibling URI
     */
    methods?: GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonLinksMethodsEnum[];
}
/**
 * Successful reply
 */
export declare class GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJson extends SpeakeasyBase {
    data?: shared.ItineraryPriceMetric[];
    /**
     * Links related to the returned objects(s)
     */
    meta?: GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonLinks;
    warnings?: shared.Warning[];
}
export declare class GetItineraryPriceMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * code    | title
     *
     * @remarks
     * ------- | -------------------------------------
     * 477     | INVALID FORMAT
     * 572     | INVALID OPTION
     * 32171   | MANDATORY DATA MISSING
     */
    error400?: shared.Error400;
    /**
     * Internal Server Error
     */
    error500?: shared.Error500;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful reply
     */
    getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject?: GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJson;
}
