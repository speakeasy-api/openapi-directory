import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on Transaction resource
 */
export declare class Transaction extends SpeakeasyBase {
    /**
     * If false, PFM services will ignore this transaction
     */
    active: boolean;
    /**
     * Date considered by PFM services. It is used to change the month of a transaction, for example.
     */
    applicationDate?: Date;
    /**
     * Date used by the bank for the transaction
     */
    bdate?: Date;
    /**
     * Datetime used by the bank
     */
    bdatetime?: Date;
    /**
     * Card number associated to the transaction
     */
    card?: string;
    /**
     * If true, this transaction hasn't been yet debited
     */
    coming: boolean;
    /**
     * User comment
     */
    comment?: string;
    /**
     * Commission taken on the transaction
     */
    commission?: number;
    /**
     * Commission currency
     */
    commissionCurrency?: Record<string, any>;
    /**
     * Counterparty
     */
    counterparty?: string;
    /**
     * Original country
     */
    country?: string;
    /**
     * Debit date
     */
    date: Date;
    /**
     * Date when the transaction has been seen
     */
    dateScraped: Date;
    /**
     * Datetime of the debit of the transaction
     */
    datetime?: Date;
    /**
     * If set, this transaction has been removed from the bank
     */
    deleted?: Date;
    /**
     * Gross value of the transaction
     */
    grossValue?: number;
    /**
     * ID of the transaction
     */
    id: number;
    /**
     * ID of the related account
     */
    idAccount: number;
    /**
     * ID of the related category
     */
    idCategory?: number;
    /**
     * If the transaction is part of a cluster
     */
    idCluster?: number;
    /**
     * Last update of the transaction
     */
    lastUpdate?: Date;
    /**
     * Type of transaction
     */
    nature: string;
    /**
     * Original currency
     */
    originalCurrency?: Record<string, any>;
    /**
     * Gross value in the original currency
     */
    originalGrossValue?: number;
    /**
     * Value in the original currency
     */
    originalValue?: number;
    /**
     * Full label of the transaction
     */
    originalWording: string;
    /**
     * Realization of the transaction
     */
    rdate: Date;
    /**
     * Datetime of the realization of the transaction
     */
    rdatetime?: Date;
    /**
     * Simplified label of the transaction
     */
    simplifiedWording: string;
    /**
     * Internal state of the transaction
     */
    state: string;
    /**
     * Do not use it
     */
    stemmedWording: string;
    /**
     * Value of the transaction
     */
    value?: number;
    /**
     * Value date of the transaction
     */
    vdate?: Date;
    /**
     * Datetime of the Value of the transaction
     */
    vdatetime?: Date;
    /**
     * Webid of the transaction
     */
    webid?: string;
    /**
     * Label set by the user
     */
    wording?: string;
}
