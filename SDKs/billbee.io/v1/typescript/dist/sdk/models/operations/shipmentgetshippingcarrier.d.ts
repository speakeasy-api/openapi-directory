import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentGetShippingCarrierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentGetShippingCarrier200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentGetShippingCarrier200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
