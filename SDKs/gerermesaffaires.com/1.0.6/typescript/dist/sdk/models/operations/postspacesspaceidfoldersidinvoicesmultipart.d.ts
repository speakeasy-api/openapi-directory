import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare enum PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataTypeEnum {
    CommercialInvoice = "commercial-invoice",
    CreditNote = "credit-note",
    AmendingInvoice = "amending-invoice",
    SelfBilling = "self-billing",
    CreditSelfBilling = "credit-self-billing",
    DownPaymentInvoice = "down-payment-invoice",
    InformationsInvoice = "informations-invoice"
}
/**
 * Invoice to add (either DocumentId, InvoiceDate either (File,Name,Content64Encoded,Title,InvoiceDate) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataAccounting;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    dueDate?: string;
    file: PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataFile;
    inclVAT?: number;
    invoiceDate?: string;
    number?: string;
    paymentDate?: string;
    title: string;
    type?: PostSpacesSpaceIdFoldersIdInvoicesMultipartFormDataTypeEnum;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartRequest extends SpeakeasyBase {
    /**
     * Invoice to add (either DocumentId, InvoiceDate either (File,Name,Content64Encoded,Title,InvoiceDate) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdInvoicesMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdInvoicesMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of invoice created
     */
    postSpacesSpaceIdFoldersIdInvoicesMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdInvoicesMultipart201ApplicationJSON;
}
