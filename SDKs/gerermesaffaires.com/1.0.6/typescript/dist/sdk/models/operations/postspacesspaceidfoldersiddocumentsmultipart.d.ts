import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdDocumentsMultipartFormDataFile;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdDocumentsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdDocumentsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdDocumentsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdDocumentsMultipart201ApplicationJSON;
}
