import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentPostShipmentFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentPostShipmentForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentPostShipmentForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
