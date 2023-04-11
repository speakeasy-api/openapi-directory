import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentGetPingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentGetPing200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentGetPing200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
