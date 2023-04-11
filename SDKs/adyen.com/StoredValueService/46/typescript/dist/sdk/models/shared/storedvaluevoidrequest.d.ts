import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoredValueVoidRequest extends SpeakeasyBase {
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The original pspReference of the payment to modify.
     */
    originalReference: string;
    /**
     * Your reference for the payment modification. This reference is visible in Customer Area and in reports.
     *
     * @remarks
     * Maximum length: 80 characters.
     */
    reference?: string;
    /**
     * The physical store, for which this payment is processed.
     */
    store?: string;
    /**
     * The reference of the tender.
     */
    tenderReference?: string;
    /**
     * The unique ID of a POS terminal.
     */
    uniqueTerminalId?: string;
}
