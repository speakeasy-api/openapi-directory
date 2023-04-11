import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdTerminalOrdersSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdTerminalOrdersRequest extends SpeakeasyBase {
    /**
     * Your purchase order number.
     */
    customerOrderReference?: string;
    /**
     * The number of orders to return.
     */
    limit?: number;
    merchantId: string;
    /**
     * The number of orders to skip.
     */
    offset?: number;
    /**
     * The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered.
     */
    status?: string;
}
export declare class GetMerchantsMerchantIdTerminalOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    terminalOrdersResponse?: shared.TerminalOrdersResponse;
}
