import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductItemApiModel extends SpeakeasyBase {
    /**
     * Work item cost
     */
    cost?: number;
    /**
     * General description
     */
    description?: string;
    /**
     * Product item id
     */
    id?: number;
    /**
     * Minimum required quantity in order to buy a work item
     */
    minimumQuantity?: number;
    /**
     * Product SKU
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
