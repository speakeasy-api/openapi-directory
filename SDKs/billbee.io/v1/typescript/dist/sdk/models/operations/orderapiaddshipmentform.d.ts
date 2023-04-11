import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiAddShipmentFormRequest extends SpeakeasyBase {
    /**
     * The shipment data to create the shipment
     */
    rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel: shared.RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;
    /**
     * The internal billbee id of the order
     */
    id: number;
}
export declare class OrderApiAddShipmentFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiAddShipmentForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiAddShipmentForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
