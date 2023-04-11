import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentPostShipmentRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentPostShipmentRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentPostShipmentRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
