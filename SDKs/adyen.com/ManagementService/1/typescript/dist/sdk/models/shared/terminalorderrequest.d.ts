import { SpeakeasyBase } from "../../../internal/utils";
import { OrderItem } from "./orderitem";
export declare class TerminalOrderRequest extends SpeakeasyBase {
    /**
     * The identification of the billing entity to use for the order.
     */
    billingEntityId?: string;
    /**
     * The merchant-defined purchase order reference.
     */
    customerOrderReference?: string;
    /**
     * The products included in the order.
     */
    items?: OrderItem[];
    /**
     * The identification of the shipping location to use for the order.
     */
    shippingLocationId?: string;
    /**
     * The tax number of the billing entity.
     */
    taxId?: string;
}
