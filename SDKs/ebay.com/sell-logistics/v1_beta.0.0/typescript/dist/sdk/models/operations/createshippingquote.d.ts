import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateShippingQuoteRequest extends SpeakeasyBase {
    /**
     * The request object for <b>createShippingQuote</b>.
     */
    shippingQuoteRequest: shared.ShippingQuoteRequest;
    /**
     * This header parameter specifies the eBay marketplace for the shipping quote that is being created. For a list of valid values, refer to the section <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Marketplace ID Values</a> in the <b>Using eBay RESTful APIs</b> guide.
     */
    xEbayCMarketplaceId: string;
}
export declare class CreateShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    shippingQuote?: shared.ShippingQuote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
