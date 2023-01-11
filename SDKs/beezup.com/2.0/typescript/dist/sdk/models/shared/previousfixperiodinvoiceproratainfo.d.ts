import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the prorata info based on your previous invoice
**/
export declare class PreviousFixPeriodInvoiceProrataInfo extends SpeakeasyBase {
    amountAfterTax?: number;
    amountToBePaid?: number;
    computedProrataToBeDeducted?: number;
    contractId?: string;
    fixedPeriodEndDate?: Date;
    fixedPeriodStartDate?: Date;
    invoiceNumber?: string;
}
