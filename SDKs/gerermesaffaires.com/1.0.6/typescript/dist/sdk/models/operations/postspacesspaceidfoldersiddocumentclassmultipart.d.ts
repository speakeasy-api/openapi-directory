import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormDataFile;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdDocumentClassMultipartFormData1;
    /**
     * class of the document
     */
    documentClass: string;
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
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentClassMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdDocumentClassMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdDocumentClassMultipart201ApplicationJSON;
}
