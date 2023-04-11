import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelShipmentSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CancelShipmentRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
     */
    shipmentId: string;
}
export declare class CancelShipmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    shipment?: shared.Shipment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
