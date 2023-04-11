import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1DonationsCarbonCalculateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The primary transportation method of the shipment.
 */
export declare enum GetApiV1DonationsCarbonCalculateTransportationMethodEnum {
    Air = "air",
    Truck = "truck",
    Rail = "rail",
    Sea = "sea"
}
export declare class GetApiV1DonationsCarbonCalculateRequest extends SpeakeasyBase {
    /**
     * The destination zip code (US only) of the shipment. If you send this parameter, also send `origin_address`.
     */
    destinationAddress?: number;
    /**
     * The total distance (in miles) of the shipment. You can use this parameter in place of `origin_address` and `destination_address`.
     */
    distanceMi?: number;
    /**
     * The origin zip code (US only) of the shipment. If you send this parameter, also send `destination_address`.
     */
    originAddress?: number;
    /**
     * The primary transportation method of the shipment.
     */
    transportationMethod?: GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
    /**
     * The total weight (in pounds) of the shipment.
     */
    weightLb: number;
}
export declare class GetApiV1DonationsCarbonCalculateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
