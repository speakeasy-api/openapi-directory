import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the prorata info based on your previous invoice
 */
export declare class PreviousFixPeriodInvoiceProrataInfo extends SpeakeasyBase {
    /**
     * The amout after tax of the previous invoice
     */
    amountAfterTax?: number;
    /**
     * The amount to be payed of the previous invoice
     */
    amountToBePaid?: number;
    /**
     * The prorata amount
     */
    computedProrataToBeDeducted?: number;
    /**
     * The contract id related to the previous invoice
     */
    contractId?: string;
    /**
     * The fixed end period of the previous invoice
     */
    fixedPeriodEndDate?: Date;
    /**
     * The fixed start period of the previous invoice
     */
    fixedPeriodStartDate?: Date;
    /**
     * The previous invoice number
     */
    invoiceNumber?: string;
}
