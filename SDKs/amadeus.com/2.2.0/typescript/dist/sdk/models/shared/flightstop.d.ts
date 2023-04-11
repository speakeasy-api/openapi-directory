import { SpeakeasyBase } from "../../../internal/utils";
/**
 * details of stops for direct or change of gauge flights
 */
export declare class FlightStop extends SpeakeasyBase {
    /**
     * arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00
     */
    arrivalAt?: Date;
    /**
     * departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00
     */
    departureAt?: Date;
    /**
     * stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
     */
    duration?: string;
    /**
     * [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
     */
    iataCode?: string;
}
