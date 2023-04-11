import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2Accounting;
    author?: string;
    begin?: string;
    code?: string;
    collectedVAT?: number;
    comment?: string;
    creditVAT?: number;
    date?: string;
    deductibleVAT?: number;
    end: string;
    exemptTurnover?: number;
    file: PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson2File;
    number?: string;
    payableVAT?: number;
    taxableTurnover?: number;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsApplicationJson1 extends SpeakeasyBase {
    begin?: string;
    collectedVAT?: number;
    creditVAT?: number;
    deductibleVAT?: number;
    documentId: string;
    end: string;
    exemptTurnover?: number;
    number?: string;
    payableVAT?: number;
    taxableTurnover?: number;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsJsonRequest extends SpeakeasyBase {
    /**
     * VATDeclaration to add (either (DocumentId,End) either (File,Name,Content64Encoded,Title,End) is mandatory)
     */
    requestBody: any;
    /**
     * Id of the folder result and taxation
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
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdVatDeclarationsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdVatDeclarationsJson201ApplicationJSON;
}
