import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2AccountEnum {
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
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2StatusEnum {
    R = "R",
    V = "V",
    W = "W"
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2 extends SpeakeasyBase {
    account?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2AccountEnum;
    accounting?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2Accounting;
    archivalDate?: string;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    expenseDate?: string;
    expenseReportId?: string;
    file: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2File;
    provider?: string;
    reason?: string;
    status?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson2StatusEnum;
    title: string;
    vat?: number;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson1AccountEnum {
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
export declare enum PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson1StatusEnum {
    R = "R",
    V = "V",
    W = "W"
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson1 extends SpeakeasyBase {
    account?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson1AccountEnum;
    archivalDate?: string;
    beforeVAT?: number;
    documentId: string;
    expenseDate?: string;
    expenseReportId?: string;
    provider?: string;
    reason?: string;
    status?: PostSpacesSpaceIdFoldersIdExpenseProofsApplicationJson1StatusEnum;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsJsonRequest extends SpeakeasyBase {
    /**
     * Expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
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
 * Id of expense proof created
 */
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseProofsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of expense proof created
     */
    postSpacesSpaceIdFoldersIdExpenseProofsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdExpenseProofsJson201ApplicationJSON;
}
