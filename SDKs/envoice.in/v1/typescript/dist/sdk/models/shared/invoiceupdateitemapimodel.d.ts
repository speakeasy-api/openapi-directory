import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceUpdateItemApiModel extends SpeakeasyBase {
    /**
     * Amount per unit
     */
    cost?: number;
    /**
     * Additional description attached to the invoice item
     */
    description?: string;
    /**
     * Discount percentage for the overall amount
     */
    discountPercentage?: number;
    /**
     * Id of invoice item
     */
    id?: number;
    /**
     * Quantity in total used for the work type
     */
    quantity?: number;
    /**
     * Tax applied on the item
     */
    taxId?: number;
    /**
     * Task percentage. Ex: 18%
     */
    taxPercentage?: number;
    /**
     * Work type (Name of the service)
     */
    workTypeId?: number;
}
