import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2Accounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson2File;
    reference?: string;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesApplicationJson1 extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
    documentId: string;
    reference?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesJsonRequest extends SpeakeasyBase {
    /**
     * Other tax declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)
     */
    requestBody: any;
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
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdOtherTaxesJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdOtherTaxesJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdOtherTaxesJson201ApplicationJSON;
}
