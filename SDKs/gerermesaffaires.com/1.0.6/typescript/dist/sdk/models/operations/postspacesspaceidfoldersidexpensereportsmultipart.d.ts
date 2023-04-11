import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataAccounting;
    author?: string;
    beforeVAT?: number;
    code?: string;
    comment?: string;
    date?: string;
    expenseDate?: string;
    file: PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormDataFile;
    inclVAT?: number;
    processingDate?: string;
    title: string;
    vat?: number;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartRequest extends SpeakeasyBase {
    /**
     * expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdExpenseReportsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdExpenseReportsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of expense report created
     */
    postSpacesSpaceIdFoldersIdExpenseReportsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdExpenseReportsMultipart201ApplicationJSON;
}
