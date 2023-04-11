import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceOrderStatusEnum } from "./ecommerceorderstatusenum";
/**
 * The order this entity is linked to.
 */
export declare class LinkedEcommerceOrder extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Current status of the order.
     */
    status?: EcommerceOrderStatusEnum;
    /**
     * The total amount of the order.
     */
    total?: string;
}
