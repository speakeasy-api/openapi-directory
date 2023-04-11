import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ShippingFulfillment } from "./shippingfulfillment";
/**
 * This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection.
 */
export declare class ShippingFulfillmentPagedCollection extends SpeakeasyBase {
    /**
     * This array contains one or more fulfillments required for the order that was specified in method endpoint.
     */
    fulfillments?: ShippingFulfillment[];
    /**
     * The total number of fulfillments in the specified order.<br><br><span class="tablenote"><strong>Note:</strong> If no fulfillments are found for the order, this field is returned with a value of <code>0</code>.</span>
     */
    total?: number;
    /**
     * This array is only returned if one or more errors or warnings occur with the call request.
     */
    warnings?: ErrorT[];
}
