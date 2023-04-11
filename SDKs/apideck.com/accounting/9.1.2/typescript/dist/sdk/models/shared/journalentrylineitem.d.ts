import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRate, LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedTrackingCategory } from "./linkedtrackingcategory";
/**
 * Debit entries are considered positive, and credit entries are considered negative.
 */
export declare enum JournalEntryLineItemTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class JournalEntryLineItemInput extends SpeakeasyBase {
    /**
     * User defined description
     */
    description?: string;
    ledgerAccount: LinkedLedgerAccountInput;
    /**
     * Tax amount
     */
    taxAmount?: number;
    taxRate?: LinkedTaxRateInput;
    /**
     * Debit entries are considered positive, and credit entries are considered negative.
     */
    totalAmount: number;
    trackingCategory?: LinkedTrackingCategory;
    /**
     * Debit entries are considered positive, and credit entries are considered negative.
     */
    type: JournalEntryLineItemTypeEnum;
}
export declare class JournalEntryLineItem extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    departmentId?: string;
    /**
     * User defined description
     */
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    ledgerAccount: LinkedLedgerAccount;
    /**
     * A unique identifier for an object.
     */
    locationId?: string;
    /**
     * Tax amount
     */
    taxAmount?: number;
    taxRate?: LinkedTaxRate;
    /**
     * Debit entries are considered positive, and credit entries are considered negative.
     */
    totalAmount: number;
    trackingCategory?: LinkedTrackingCategory;
    /**
     * Debit entries are considered positive, and credit entries are considered negative.
     */
    type: JournalEntryLineItemTypeEnum;
}
