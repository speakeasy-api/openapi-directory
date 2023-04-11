import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { JournalEntryLineItem, JournalEntryLineItemInput } from "./journalentrylineitem";
export declare class JournalEntryInput extends SpeakeasyBase {
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Currency Exchange Rate at the time entity was recorded/generated.
     */
    currencyRate?: number;
    /**
     * Journal symbol of the entry. For example IND for indirect costs
     */
    journalSymbol?: string;
    /**
     * Requires a minimum of 2 line items that sum to 0
     */
    lineItems?: JournalEntryLineItemInput[];
    /**
     * Reference for the journal entry.
     */
    memo?: string;
    /**
     * This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.
     */
    postedAt?: Date;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Journal entry title
     */
    title?: string;
}
export declare class JournalEntry extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Currency Exchange Rate at the time entity was recorded/generated.
     */
    currencyRate?: number;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Journal symbol of the entry. For example IND for indirect costs
     */
    journalSymbol?: string;
    /**
     * Requires a minimum of 2 line items that sum to 0
     */
    lineItems?: JournalEntryLineItem[];
    /**
     * Reference for the journal entry.
     */
    memo?: string;
    /**
     * This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.
     */
    postedAt?: Date;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Journal entry title
     */
    title?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
