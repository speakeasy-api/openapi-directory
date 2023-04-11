import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdInvoicesJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2AccountingWorkbookEnum {
    Customer = "customer",
    Provider = "provider",
    Bank = "bank",
    CashWoucher = "cashWoucher",
    Fiscal = "fiscal",
    Insurance = "insurance",
    Social = "social",
    Other = "other",
    Permanent = "permanent"
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2TypeEnum {
    CommercialInvoice = "commercial-invoice",
    CreditNote = "credit-note",
    AmendingInvoice = "amending-invoice",
    SelfBilling = "self-billing",
    CreditSelfBilling = "credit-self-billing",
    DownPaymentInvoice = "down-payment-invoice",
    InformationsInvoice = "informations-invoice"
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2Accounting;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    dueDate?: string;
    file: PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2File;
    inclVAT?: number;
    invoiceDate?: string;
    number?: string;
    paymentDate?: string;
    title: string;
    type?: PostSpacesSpaceIdFoldersIdInvoicesApplicationJson2TypeEnum;
    vat?: number;
}
export declare enum PostSpacesSpaceIdFoldersIdInvoicesApplicationJson1TypeEnum {
    CommercialInvoice = "commercial-invoice",
    CreditNote = "credit-note",
    AmendingInvoice = "amending-invoice",
    SelfBilling = "self-billing",
    CreditSelfBilling = "credit-self-billing",
    DownPaymentInvoice = "down-payment-invoice",
    InformationsInvoice = "informations-invoice"
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesApplicationJson1 extends SpeakeasyBase {
    beforeVAT?: number;
    date?: string;
    documentId: string;
    dueDate?: string;
    inclVAT?: number;
    invoiceDate?: string;
    number?: string;
    paymentDate?: string;
    type?: PostSpacesSpaceIdFoldersIdInvoicesApplicationJson1TypeEnum;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesJsonRequest extends SpeakeasyBase {
    /**
     * Invoice to add (either DocumentId, InvoiceDate either (File,Name,Content64Encoded,Title,InvoiceDate) is mandatory)
     */
    requestBody: any;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of invoice created
 */
export declare class PostSpacesSpaceIdFoldersIdInvoicesJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of invoice created
     */
    postSpacesSpaceIdFoldersIdInvoicesJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdInvoicesJson201ApplicationJSON;
}
