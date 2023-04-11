import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
 */
export declare enum GetFlightOffersTravelClassEnum {
    Economy = "ECONOMY",
    PremiumEconomy = "PREMIUM_ECONOMY",
    Business = "BUSINESS",
    First = "FIRST"
}
export declare class GetFlightOffersRequest extends SpeakeasyBase {
    /**
     * the number of adult travelers (age 12 or older on date of departure).
     */
    adults: number;
    /**
     * the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
     */
    children?: number;
    /**
     * the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
     */
    currencyCode?: string;
    /**
     * the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
     */
    departureDate: Date;
    /**
     * city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
     */
    destinationLocationCode: string;
    /**
     * This option ensures that the system will ignore these airlines. This can not be cumulated with parameter includedAirlineCodes.
     *
     * @remarks
     *
     * Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
     *
     */
    excludedAirlineCodes?: string;
    /**
     * This option ensures that the system will only consider these airlines. This can not be cumulated with parameter excludedAirlineCodes.
     *
     * @remarks
     *
     * Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
     *
     */
    includedAirlineCodes?: string;
    /**
     * the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult traveler, and thus the number of infants must not exceed the number of adults. If specified, this number should be greater than or equal to 0
     */
    infants?: number;
    /**
     * maximum number of flight offers to return. If specified, the value should be greater than or equal to 1
     */
    max?: number;
    /**
     * maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
     */
    maxPrice?: number;
    /**
     * if set to true, the search will find only flights going from the origin to the destination with no stop in between
     */
    nonStop?: boolean;
    /**
     * city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
     */
    originLocationCode: string;
    /**
     * the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
     */
    returnDate?: Date;
    /**
     * most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
     */
    travelClass?: GetFlightOffersTravelClassEnum;
}
/**
 * Successful Operation
 */
export declare class GetFlightOffersSuccess extends SpeakeasyBase {
    data: shared.FlightOffer[];
    dictionaries?: shared.Dictionaries;
    meta?: shared.CollectionMetaLink;
    warnings?: shared.Issue[];
}
export declare class GetFlightOffersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * code    | title
     *
     * @remarks
     * ------- | -------------------------------------
     * 425     | INVALID DATE
     * 477     | INVALID FORMAT
     * 2668    | PARAMETER COMBINATION INVALID/RESTRICTED
     * 4926    | INVALID DATA RECEIVED
     * 10661   | MAXIMUM NUMBER OF OCCURRENCES EXCEEDED
     * 32171   | MANDATORY DATA MISSING
     *
     */
    error400?: shared.Error400;
    /**
     * Unexpected error
     */
    error500?: shared.Error500;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    success?: GetFlightOffersSuccess;
}
