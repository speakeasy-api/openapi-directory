import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const UrbanDeliveryServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class UrbanDeliveryRequestBody extends SpeakeasyBase {
    /**
     * Client Api Key
     */
    apiKeyL1: string;
    /**
     * Integration Partner Api Key
     */
    apiKeyL2: string;
    /**
     * Destination latitude (like: 50.870752, value = -90<=x<=90)
     */
    destinationLatitude: number;
    /**
     * Destination longitude (like: 4.669490, value = -180<=x<=180)
     */
    destinationLongitude: number;
    /**
     * item_count' (like:2, value = 0<x<=100)
     */
    itemCount: number;
    /**
     * Origin latitude (like: 23.372628, value = -90<=x<=90)
     */
    originLatitude: number;
    /**
     * Origin longitude (like: 113.159339, value = -180<=x<=180)
     */
    originLongitude: number;
    /**
     * Vehicle type (like: private car, motorcycle,cargo van,zero-emission)
     */
    vehicleType: string;
}
export declare class UrbanDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
