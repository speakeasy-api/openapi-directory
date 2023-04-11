import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const EcommerceDeliveryServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class EcommerceDeliveryRequestBody extends SpeakeasyBase {
    /**
     * Client Api Key
     */
    apiKeyL1: string;
    /**
     * Integration Partner Api Key
     */
    apiKeyL2: string;
    /**
     * valid airport code of destination
     */
    destinationAirportCode?: string;
    /**
     * valid latitude of destination
     */
    destinationLatitude: number;
    /**
     * valid longitude of destination
     */
    destinationLongitude: number;
    /**
     * valid airport code of origin
     */
    originAirportCode?: string;
    /**
     * valid latitude of origin
     */
    originLatitude: number;
    /**
     * valid longitude of origin
     */
    originLongitude: number;
    /**
     * Volumetric weight' (like:2.70)
     */
    volumetricWeight: number;
    /**
     * this can be 'air only', 'road only' or 'air and road'
     */
    waybillType: string;
}
export declare class EcommerceDeliveryRequest extends SpeakeasyBase {
    contentType: string;
    requestBody?: EcommerceDeliveryRequestBody;
}
export declare class EcommerceDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
