import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeparturesByCRSRequest extends SpeakeasyBase {
    /**
     * The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
     */
    crs: string;
    /**
     * The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
     */
    apiKey: string;
    /**
     * The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.
     */
    filterStation?: string;
    /**
     * The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.
     */
    numServices?: number;
    /**
     * Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
     */
    serviceDetails?: boolean;
    /**
     * The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.
     */
    timeOffset?: number;
    /**
     * The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.
     */
    timeWindow?: number;
}
export declare class GetDeparturesByCRSResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
