import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { InvoiceAttachment } from "./invoiceattachment";
import { InvoiceItem } from "./invoiceitem";
import { Payment } from "./payment";
import { PaymentGatewayForInvoice } from "./paymentgatewayforinvoice";
export declare enum InvoiceStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class Invoice extends SpeakeasyBase {
    accessToken?: string;
    activities?: Activity[];
    attachments?: InvoiceAttachment[];
    clientId?: number;
    clonedFromId?: number;
    currencyId?: number;
    discountAmount?: number;
    duedate?: Date;
    enablePartialPayments?: boolean;
    estimationId?: number;
    id?: number;
    invoiceCategoryId?: number;
    isDigitallySigned?: boolean;
    issuedOn?: Date;
    items?: InvoiceItem[];
    notes?: string;
    number?: string;
    orderId?: number;
    paymentGateways?: PaymentGatewayForInvoice[];
    paymentLinkId?: number;
    payments?: Payment[];
    poNumber?: string;
    recurringProfileId?: number;
    shouldSendReminders?: boolean;
    status?: InvoiceStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    terms?: string;
    totalAmount?: number;
    userId?: number;
}
