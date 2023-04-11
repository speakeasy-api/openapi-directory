import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInvoiceItem, LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRate, LinkedTaxRateInput } from "./linkedtaxrate";
/**
 * Item type
 */
export declare enum InvoiceLineItemTypeEnum {
    SalesItem = "sales_item",
    Discount = "discount",
    Info = "info",
    SubTotal = "sub_total"
}
export declare class InvoiceLineItemInput extends SpeakeasyBase {
    /**
     * User defined item code
     */
    code?: string;
    /**
     * Department id
     */
    departmentId?: string;
    /**
     * User defined description
     */
    description?: string;
    /**
     * Discount amount applied to the line item when supported downstream.
     */
    discountAmount?: number;
    /**
     * Discount percentage applied to the line item when supported downstream.
     */
    discountPercentage?: number;
    item?: LinkedInvoiceItemInput;
    ledgerAccount?: LinkedLedgerAccountInput;
    /**
     * Line number in the invoice
     */
    lineNumber?: number;
    /**
     * Location id
     */
    locationId?: string;
    quantity?: number;
    /**
     * Row ID
     */
    rowId?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Tax amount
     */
    taxAmount?: number;
    taxRate?: LinkedTaxRateInput;
    /**
     * Total amount of the line item
     */
    totalAmount?: number;
    /**
     * Item type
     */
    type?: InvoiceLineItemTypeEnum;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceLineItem extends SpeakeasyBase {
    /**
     * User defined item code
     */
    code?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Department id
     */
    departmentId?: string;
    /**
     * User defined description
     */
    description?: string;
    /**
     * Discount amount applied to the line item when supported downstream.
     */
    discountAmount?: number;
    /**
     * Discount percentage applied to the line item when supported downstream.
     */
    discountPercentage?: number;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    item?: LinkedInvoiceItem;
    ledgerAccount?: LinkedLedgerAccount;
    /**
     * Line number in the invoice
     */
    lineNumber?: number;
    /**
     * Location id
     */
    locationId?: string;
    quantity?: number;
    /**
     * Row ID
     */
    rowId?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Tax amount
     */
    taxAmount?: number;
    taxRate?: LinkedTaxRate;
    /**
     * Total amount of the line item
     */
    totalAmount?: number;
    /**
     * Item type
     */
    type?: InvoiceLineItemTypeEnum;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
