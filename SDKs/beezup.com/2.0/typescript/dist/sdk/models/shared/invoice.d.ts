import { SpeakeasyBase } from "../../../internal/utils";
import { InvoicePaymentStatusEnum } from "./invoicepaymentstatusenum";
export declare class Invoice extends SpeakeasyBase {
    amount: number;
    amountToBePaid: number;
    contractId: string;
    currencyCode: string;
    dueDate: Date;
    invoiceDate: Date;
    invoiceNumber: string;
    invoiceUrl?: string;
    paymentStatus: InvoicePaymentStatusEnum;
}
