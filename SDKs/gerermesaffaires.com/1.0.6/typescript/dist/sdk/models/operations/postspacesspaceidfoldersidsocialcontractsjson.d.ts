import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdSocialContractsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2Accounting;
    author?: string;
    code?: string;
    comment?: string;
    contractDate?: string;
    contractDuration?: string;
    contractualChange?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson2File;
    position?: string;
    title: string;
    wageDevelopments?: number;
}
export declare class PostSpacesSpaceIdFoldersIdSocialContractsApplicationJson1 extends SpeakeasyBase {
    contractDate?: string;
    contractDuration?: string;
    contractualChange?: string;
    documentId: string;
    position?: string;
    wageDevelopments?: number;
}
export declare class PostSpacesSpaceIdFoldersIdSocialContractsJsonRequest extends SpeakeasyBase {
    /**
     * Social contract to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: any;
    /**
     * Id of the folder employee
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
export declare class PostSpacesSpaceIdFoldersIdSocialContractsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdSocialContractsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdSocialContractsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdSocialContractsJson201ApplicationJSON;
}
