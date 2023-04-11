import { SpeakeasyBase } from "../../../internal/utils";
import { InvoicePaymentStatusEnum } from "./invoicepaymentstatusenum";
export declare class Invoice extends SpeakeasyBase {
    /**
     * The amount of your invoice
     */
    amount: number;
    /**
     * The remaining amount to be paid for this invoice
     */
    amountToBePaid: number;
    /**
     * Your contract identifier
     */
    contractId: string;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode: string;
    dueDate: Date;
    /**
     * The invoice date
     */
    invoiceDate: Date;
    /**
     * Your invoice number
     */
    invoiceNumber: string;
    /**
     * The url of the invoice document
     */
    invoiceUrl?: string;
    /**
     * The payment status
     */
    paymentStatus: InvoicePaymentStatusEnum;
}
