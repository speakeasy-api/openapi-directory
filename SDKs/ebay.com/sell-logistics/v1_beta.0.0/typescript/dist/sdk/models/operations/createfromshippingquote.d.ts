import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFromShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateFromShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    shipment?: shared.Shipment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
