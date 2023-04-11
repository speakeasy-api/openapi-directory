import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2Accounting;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    expenseDate?: string;
    file: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2File;
    inclVAT?: number;
    processingDate?: string;
    title: string;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson1 extends SpeakeasyBase {
    beforeVAT?: number;
    date?: string;
    documentId: string;
    expenseDate?: string;
    inclVAT?: number;
    processingDate?: string;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsJsonRequest extends SpeakeasyBase {
    /**
     * expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
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
 * Id of expense report created
 */
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of expense report created
     */
    postSpacesSpaceIdFoldersIdExpenseReportsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdExpenseReportsJson201ApplicationJSON;
}
