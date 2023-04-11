import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInvoiceItem, LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRate, LinkedTaxRateInput } from "./linkedtaxrate";
/**
 * Bill Line Item type
 */
export declare enum BillLineItemTypeEnum {
    ExpenseItem = "expense_item",
    ExpenseAccount = "expense_account"
}
export declare class BillLineItemInput extends SpeakeasyBase {
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
     * Discount percentage
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
     * Bill Line Item type
     */
    type?: BillLineItemTypeEnum;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class BillLineItem extends SpeakeasyBase {
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
     * Discount percentage
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
     * Bill Line Item type
     */
    type?: BillLineItemTypeEnum;
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
