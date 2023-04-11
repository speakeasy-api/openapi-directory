import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceItemApiModel extends SpeakeasyBase {
    /**
     * Amount per unit
     */
    cost?: number;
    /**
     * Additional description attached to the invoice item
     */
    description?: string;
    /**
     * Amount that goes as a discount
     */
    discountAmount?: number;
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
     * Sub-Total amount of the invoice item (Amount without tax)
     */
    subTotalAmount?: number;
    /**
     * Amount that goes to the tax
     */
    taxAmount?: number;
    /**
     * Tax applied on the item
     */
    taxId?: number;
    /**
     * Task percentage. Ex: 18%
     */
    taxPercentage?: number;
    /**
     * Total amount of the invoice item
     */
    totalAmount?: number;
    /**
     * Work type (Name of the service)
     */
    workTypeId?: number;
}
