import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdBankStatementsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2Accounting;
    author?: string;
    balance?: number;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson2File;
    number?: number;
    statementDate: string;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsApplicationJson1 extends SpeakeasyBase {
    balance?: number;
    documentId: string;
    number?: number;
    statementDate: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsJsonRequest extends SpeakeasyBase {
    /**
     * Bank statement to add (either DocumentId,StatementDate either (File,Name,Content64Encoded,Title,StatementDate) is mandatory)
     */
    requestBody: any;
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
export declare class PostSpacesSpaceIdFoldersIdBankStatementsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdBankStatementsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdBankStatementsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdBankStatementsJson201ApplicationJSON;
}
