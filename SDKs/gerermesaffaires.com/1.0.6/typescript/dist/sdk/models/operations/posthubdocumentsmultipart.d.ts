import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubDocumentsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubDocumentsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostHubDocumentsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubDocumentsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubDocumentsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add
 */
export declare class PostHubDocumentsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostHubDocumentsMultipartFormDataAccounting;
    author?: string;
    comment?: string;
    date?: string;
    file: PostHubDocumentsMultipartFormDataFile;
    title: string;
}
/**
 * Id of documents created
 */
export declare class PostHubDocumentsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubDocumentsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubDocumentsMultipart201ApplicationJSONObject?: PostHubDocumentsMultipart201ApplicationJSON;
}
