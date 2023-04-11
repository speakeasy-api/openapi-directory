import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubPayslipsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubPayslipsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostHubPayslipsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubPayslipsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubPayslipsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add
 */
export declare class PostHubPayslipsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostHubPayslipsMultipartFormDataAccounting;
    author?: string;
    comment?: string;
    date?: string;
    file: PostHubPayslipsMultipartFormDataFile;
    title: string;
}
/**
 * Id of documents created
 */
export declare class PostHubPayslipsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubPayslipsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubPayslipsMultipart201ApplicationJSONObject?: PostHubPayslipsMultipart201ApplicationJSON;
}
