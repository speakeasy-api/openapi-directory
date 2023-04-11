import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubPayslipsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubPayslipsApplicationJSONAccountingWorkbookEnum {
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
export declare class PostHubPayslipsApplicationJSONAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubPayslipsApplicationJSONAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubPayslipsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Document to add
 */
export declare class PostHubPayslipsApplicationJSON extends SpeakeasyBase {
    accounting?: PostHubPayslipsApplicationJSONAccounting;
    addContractAllowed?: boolean;
    author?: string;
    comment?: string;
    date?: string;
    file: PostHubPayslipsApplicationJSONFile;
    title: string;
}
/**
 * Id of documents created
 */
export declare class PostHubPayslipsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubPayslipsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubPayslipsJSON201ApplicationJSONObject?: PostHubPayslipsJson201ApplicationJSON;
}
