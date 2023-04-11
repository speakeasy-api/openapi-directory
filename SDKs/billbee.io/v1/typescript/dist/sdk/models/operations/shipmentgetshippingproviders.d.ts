import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentGetShippingprovidersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentGetShippingproviders200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentGetShippingproviders200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
