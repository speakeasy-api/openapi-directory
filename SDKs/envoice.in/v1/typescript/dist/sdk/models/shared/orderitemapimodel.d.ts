import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderItemApiModel extends SpeakeasyBase {
    /**
     * Work item cost
     */
    cost?: number;
    /**
     * General description
     */
    description?: string;
    /**
     * Foreign key product item id
     */
    productItemId?: number;
    /**
     * Work item quantity
     */
    quantity?: number;
    /**
     * Order SKU
     */
    referenceId?: string;
    /**
     * Subtotal amount of product
     */
    subTotalAmount?: number;
    /**
     * Tax amount
     */
    taxAmount?: number;
    /**
     * Foreign key Tax id
     */
    taxId?: number;
    /**
     * Tax percentage
     */
    taxPercentage?: number;
    /**
     * Total amount of product
     */
    totalAmount?: number;
    /**
     * Foreign key work type id
     */
    workTypeId?: number;
}
