import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderItem extends SpeakeasyBase {
    /**
     * The unique identifier of the product.
     */
    id?: string;
    /**
     * The name of the product.
     */
    name?: string;
    /**
     * The number of items with the specified product `id` included in the order.
     */
    quantity?: number;
}
