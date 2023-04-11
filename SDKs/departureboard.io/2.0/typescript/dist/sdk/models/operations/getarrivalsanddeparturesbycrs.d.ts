import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetArrivalsAndDeparturesByCRSRequest extends SpeakeasyBase {
    /**
     * The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.
     */
    crs: string;
    /**
     * The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
     */
    apiKey: string;
    /**
     * The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.
     */
    filterStation?: string;
    /**
     * Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.
     */
    filterType?: string;
    /**
     * The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.
     */
    numServices?: number;
    /**
     * Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
     */
    serviceDetails?: boolean;
    /**
     * The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
     */
    timeOffset?: number;
    /**
     * The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
     */
    timeWindow?: number;
}
export declare class GetArrivalsAndDeparturesByCRSResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
