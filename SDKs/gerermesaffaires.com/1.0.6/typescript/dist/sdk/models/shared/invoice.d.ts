import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceTypeEnum {
    CommercialInvoice = "commercial-invoice",
    CreditNote = "credit-note",
    AmendingInvoice = "amending-invoice",
    SelfBilling = "self-billing",
    CreditSelfBilling = "credit-self-billing",
    DownPaymentInvoice = "down-payment-invoice",
    InformationsInvoice = "informations-invoice"
}
export declare class Invoice extends SpeakeasyBase {
    accountedOn?: string;
    author?: string;
    beforeVAT?: number;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    dueDate?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    inclVAT?: number;
    invoiceDate?: string;
    number?: string;
    paymentDate?: string;
    title?: string;
    type?: InvoiceTypeEnum;
    vat?: number;
}
