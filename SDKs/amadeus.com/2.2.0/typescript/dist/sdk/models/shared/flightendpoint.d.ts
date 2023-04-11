import { SpeakeasyBase } from "../../../internal/utils";
/**
 * departure or arrival information
 */
export declare class FlightEndPoint extends SpeakeasyBase {
    /**
     * local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00
     */
    at?: Date;
    /**
     * [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
     */
    iataCode?: string;
    /**
     * terminal name / number
     */
    terminal?: string;
}
