import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2Accounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson2File;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsApplicationJson1 extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
    documentId: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonRequest extends SpeakeasyBase {
    /**
     * Social declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
     */
    requestBody: any;
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
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialDeclarationsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdSocialDeclarationsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdSocialDeclarationsJson201ApplicationJSON;
}
