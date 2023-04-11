import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRate, LinkedTaxRateInput } from "./linkedtaxrate";
export declare class InvoiceItemPurchaseDetailsInput extends SpeakeasyBase {
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRateInput;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItemSalesDetailsInput extends SpeakeasyBase {
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRateInput;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
/**
 * Item type
 */
export declare enum InvoiceItemTypeEnum {
    Inventory = "inventory",
    Service = "service",
    Other = "other"
}
export declare class InvoiceItemInput extends SpeakeasyBase {
    active?: boolean;
    assetAccount?: LinkedLedgerAccountInput;
    /**
     * User defined item code
     */
    code?: string;
    /**
     * A short description of the item
     */
    description?: string;
    expenseAccount?: LinkedLedgerAccountInput;
    incomeAccount?: LinkedLedgerAccountInput;
    /**
     * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
     */
    inventoryDate?: Date;
    /**
     * Item name
     */
    name?: string;
    purchaseDetails?: InvoiceItemPurchaseDetailsInput;
    /**
     * Item is available for purchase transactions
     */
    purchased?: boolean;
    quantity?: number;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    salesDetails?: InvoiceItemSalesDetailsInput;
    /**
     * Item will be available on sales transactions
     */
    sold?: boolean;
    /**
     * Item is inventoried
     */
    tracked?: boolean;
    /**
     * Item type
     */
    type?: InvoiceItemTypeEnum;
    unitPrice?: number;
}
export declare class InvoiceItemPurchaseDetails extends SpeakeasyBase {
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRate;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItemSalesDetails extends SpeakeasyBase {
    /**
     * Amounts are including tax
     */
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRate;
    /**
     * Description of the unit type the item is sold as, ie: kg, hour.
     */
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItem extends SpeakeasyBase {
    active?: boolean;
    assetAccount?: LinkedLedgerAccount;
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
     * A short description of the item
     */
    description?: string;
    expenseAccount?: LinkedLedgerAccount;
    /**
     * The ID of the item.
     */
    id?: string;
    incomeAccount?: LinkedLedgerAccount;
    /**
     * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
     */
    inventoryDate?: Date;
    /**
     * Item name
     */
    name?: string;
    purchaseDetails?: InvoiceItemPurchaseDetails;
    /**
     * Item is available for purchase transactions
     */
    purchased?: boolean;
    quantity?: number;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    salesDetails?: InvoiceItemSalesDetails;
    /**
     * Item will be available on sales transactions
     */
    sold?: boolean;
    /**
     * Item is inventoried
     */
    tracked?: boolean;
    /**
     * Item type
     */
    type?: InvoiceItemTypeEnum;
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
