import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Bank statement to add (either DocumentId,StatementDate either (File,Name,Content64Encoded,Title,StatementDate) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataAccounting;
    author?: string;
    balance?: number;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormDataFile;
    number?: number;
    statementDate: string;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartRequest extends SpeakeasyBase {
    /**
     * Bank statement to add (either DocumentId,StatementDate either (File,Name,Content64Encoded,Title,StatementDate) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdBankStatementsMultipartFormData1;
    /**
     * Id of the folder bank
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdBankStatementsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdBankStatementsMultipart201ApplicationJSON;
}
