import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const AirtravelCoordinatesServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class AirtravelCoordinatesRequestBody extends SpeakeasyBase {
    /**
     * Client Api Key
     */
    apiKeyL1: string;
    /**
     * Integration Partner Api Key
     */
    apiKeyL2: string;
    /**
     * Destination latitude (like:  50.870752, value = -90<=x<=90)
     */
    destinationAirportLatitude: number;
    /**
     * Destination longitude (like:  4.669490, value = -180<=x<=180)
     */
    destinationAirportLongitude: number;
    /**
     * Number of passengers (like: 1, 2 ,3 )
     */
    numberOfPassengers: number;
    /**
     * Origin latitude (like: 23.372628 value = -90<=x<=90 )
     */
    originAirportLatitude: number;
    /**
     * Origin longitude (like: 113.159339, value = -180<=x<=180 )
     */
    originAirportLongitude: number;
    /**
     * Travel class can be 'First Class', 'Economy', 'Business' or 'Premium Economy'
     */
    travelClass: string;
    /**
     * Travel mode can be 'one way' or 'round trip'
     */
    travelMode: string;
}
export declare class AirtravelCoordinatesRequest extends SpeakeasyBase {
    contentType: string;
    requestBody?: AirtravelCoordinatesRequestBody;
}
export declare class AirtravelCoordinatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
