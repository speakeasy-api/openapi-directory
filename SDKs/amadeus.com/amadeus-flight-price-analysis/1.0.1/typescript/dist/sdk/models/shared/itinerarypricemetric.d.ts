import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of a particular point or place in physical space
 */
export declare class ItineraryPriceMetricLocation extends SpeakeasyBase {
    /**
     * IATA location code
     */
    iataCode?: string;
}
export declare enum ItineraryPriceMetricPriceMetricsQuartileRankingEnum {
    Minimum = "MINIMUM",
    First = "FIRST",
    Medium = "MEDIUM",
    Third = "THIRD",
    Maximum = "MAXIMUM"
}
export declare class ItineraryPriceMetricPriceMetrics extends SpeakeasyBase {
    /**
     * Defines the monetary value with decimal position. It can be in cash or miles.
     */
    amount?: string;
    quartileRanking?: ItineraryPriceMetricPriceMetricsQuartileRankingEnum;
}
/**
 * transportation type
 */
export declare enum ItineraryPriceMetricTransportTypeEnum {
    Flight = "FLIGHT"
}
/**
 * price metric
 */
export declare class ItineraryPriceMetric extends SpeakeasyBase {
    /**
     * currency of the prices.
     *
     * @remarks
     *
     * Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
     */
    currencyCode?: string;
    /**
     * The date on which the traveler will depart from the origin to go to the destination.
     *
     * @remarks
     *
     * Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.
     */
    departureDate?: string;
    /**
     * Description of a particular point or place in physical space
     */
    destination?: ItineraryPriceMetricLocation;
    /**
     * true for a one way trip,
     *
     * @remarks
     * false for a round trip
     */
    oneWay?: boolean;
    /**
     * Description of a particular point or place in physical space
     */
    origin?: ItineraryPriceMetricLocation;
    priceMetrics?: ItineraryPriceMetricPriceMetrics[];
    /**
     * transportation type
     */
    transportType?: ItineraryPriceMetricTransportTypeEnum;
    /**
     * ressource type - always price-metrics
     */
    type?: string;
}
