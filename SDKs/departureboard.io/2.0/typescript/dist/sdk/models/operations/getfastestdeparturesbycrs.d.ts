import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFastestDeparturesByCRSRequest extends SpeakeasyBase {
    /**
     * The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
     */
    crs: string;
    /**
     * The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
     */
    apiKey: string;
    /**
     * The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.
     */
    filterList: string;
    /**
     * Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
     */
    serviceDetails?: boolean;
    /**
     * The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.
     */
    timeOffset?: number;
    /**
     * The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.
     */
    timeWindow?: number;
}
export declare class GetFastestDeparturesByCRSResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
