import { SpeakeasyBase } from "../../../internal/utils";
import { DateTimeRange } from "./datetimerange";
export declare class OriginDestination extends SpeakeasyBase {
    /**
     * Set of alternative destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
     */
    alternativeDestinationsCodes?: string[];
    /**
     * Set of alternative origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
     */
    alternativeOriginsCodes?: string[];
    arrivalDateTimeRange?: DateTimeRange;
    departureDateTimeRange?: DateTimeRange;
    /**
     * Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
     */
    destinationLocationCode?: string;
    /**
     * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
     *
     * @remarks
     *
     * Can not be combined with "dateWindow" or "timeWindow".
     *
     */
    destinationRadius?: number;
    /**
     * List of excluded connections points. Any FlightOffer with these connections points will be present in response. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
     */
    excludedConnectionPoints?: string[];
    id?: string;
    /**
     * List of included connections points. When an includedViaPoints option is specified, all FlightOffer returned must at least go via this Connecting Point. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
     */
    includedConnectionPoints?: string[];
    /**
     * Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
     */
    originLocationCode?: string;
    /**
     * Include other possible locations around the point, located less than this distance in kilometers away. Max:300
     *
     * @remarks
     *
     * Can not be combined with "dateWindow" or "timeWindow".
     *
     */
    originRadius?: number;
}
