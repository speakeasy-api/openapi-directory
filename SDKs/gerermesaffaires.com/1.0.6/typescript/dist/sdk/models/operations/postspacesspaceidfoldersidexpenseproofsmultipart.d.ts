import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccountEnum {
    Cab = "CAB",
    Ikm = "IKM",
    Prk = "PRK",
    Txi = "TXI",
    Voy = "VOY",
    Ptt = "PTT",
    Fhr = "FHR",
    Div = "DIV",
    Res = "RES"
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataStatusEnum {
    R = "R",
    V = "V",
    W = "W"
}
/**
 * Expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormData1 extends SpeakeasyBase {
    account?: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccountEnum;
    accounting?: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataAccounting;
    archivalDate?: string;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    expenseDate?: string;
    expenseReportId?: string;
    file: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataFile;
    provider?: string;
    reason?: string;
    status?: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormDataStatusEnum;
    title: string;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartRequest extends SpeakeasyBase {
    /**
     * Expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdExpenseProofsMultipartFormData1;
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
 * Id of expense proof created
 */
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of expense proof created
     */
    postSpacesSpaceIdFoldersIdExpenseProofsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdExpenseProofsMultipart201ApplicationJSON;
}
