import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShippingFulfillmentSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetShippingFulfillmentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the fulfillment. This eBay-generated value was created by the <b>Create Shipping Fulfillment</b> call, and returned by the <b>getShippingFulfillments</b> call in the <b>fulfillments.fulfillmentId</b> field; for example, <code>9405509699937003457459</code>.
     */
    fulfillmentId: string;
    /**
     * The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
     */
    orderId: string;
}
export declare class GetShippingFulfillmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    shippingFulfillment?: shared.ShippingFulfillment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
