import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShipmentPostShipmentJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    shipmentPostShipmentJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    shipmentPostShipmentJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
