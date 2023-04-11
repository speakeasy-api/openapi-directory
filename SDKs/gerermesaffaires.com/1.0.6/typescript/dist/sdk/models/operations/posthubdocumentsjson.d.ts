import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubDocumentsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubDocumentsApplicationJSONAccountingWorkbookEnum {
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
export declare class PostHubDocumentsApplicationJSONAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubDocumentsApplicationJSONAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubDocumentsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Document to add
 */
export declare class PostHubDocumentsApplicationJSON extends SpeakeasyBase {
    accounting?: PostHubDocumentsApplicationJSONAccounting;
    addContractAllowed?: boolean;
    author?: string;
    comment?: string;
    date?: string;
    file: PostHubDocumentsApplicationJSONFile;
    title: string;
}
/**
 * Id of documents created
 */
export declare class PostHubDocumentsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubDocumentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubDocumentsJSON201ApplicationJSONObject?: PostHubDocumentsJson201ApplicationJSON;
}
