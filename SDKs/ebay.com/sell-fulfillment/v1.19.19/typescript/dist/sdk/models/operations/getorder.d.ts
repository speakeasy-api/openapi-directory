import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * The response type associated with the order. The only presently supported value is <code>TAX_BREAKDOWN</code>. This type returns a breakdown of tax and fee values associated with the order.
     */
    fieldGroups?: string;
    /**
     * The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.<span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not provide the orderId for an order created more than two years in the past.</span>
     */
    orderId: string;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    order?: shared.Order;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
