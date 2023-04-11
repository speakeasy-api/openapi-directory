import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShippingFulfillmentsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetShippingFulfillmentsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
     */
    orderId: string;
}
export declare class GetShippingFulfillmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    shippingFulfillmentPagedCollection?: shared.ShippingFulfillmentPagedCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
