import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiAddShipmentRawRequest extends SpeakeasyBase {
    /**
     * The shipment data to create the shipment
     */
    requestBody: Uint8Array;
    /**
     * The internal billbee id of the order
     */
    id: number;
}
export declare class OrderApiAddShipmentRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiAddShipmentRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiAddShipmentRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
