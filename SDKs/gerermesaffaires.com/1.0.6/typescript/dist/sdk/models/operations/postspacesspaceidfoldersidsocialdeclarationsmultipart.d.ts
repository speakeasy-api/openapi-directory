import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Social declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataAccounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormDataFile;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartRequest extends SpeakeasyBase {
    /**
     * Social declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartFormData1;
    /**
     * Id of the folder social regime
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
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdSocialDeclarationsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdSocialDeclarationsMultipart201ApplicationJSON;
}
