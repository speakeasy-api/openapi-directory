import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetShippingQuoteRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The <b>shippingQuoteId</b> value is generated and returned by a call to <b>createShippingQuote</b>.
     */
    shippingQuoteId: string;
}
export declare class GetShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    shippingQuote?: shared.ShippingQuote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
