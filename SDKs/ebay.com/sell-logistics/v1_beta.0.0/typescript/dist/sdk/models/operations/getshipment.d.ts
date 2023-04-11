import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShipmentSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetShipmentRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
     */
    shipmentId: string;
}
export declare class GetShipmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    shipment?: shared.Shipment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
