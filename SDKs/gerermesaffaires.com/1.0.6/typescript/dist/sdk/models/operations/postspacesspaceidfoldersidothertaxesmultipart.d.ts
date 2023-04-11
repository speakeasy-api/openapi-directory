import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Other tax declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataAccounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormDataFile;
    reference?: string;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartRequest extends SpeakeasyBase {
    /**
     * Other tax declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdOtherTaxesMultipartFormData1;
    /**
     * Id of the folder tax contract
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
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdOtherTaxesMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdOtherTaxesMultipart201ApplicationJSON;
}
