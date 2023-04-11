import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * VATDeclaration to add (either (DocumentId,End) either (File,Name,Content64Encoded,Title,End) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataAccounting;
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
    file: PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormDataFile;
    number?: string;
    payableVAT?: number;
    taxableTurnover?: number;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartRequest extends SpeakeasyBase {
    /**
     * VATDeclaration to add (either (DocumentId,End) either (File,Name,Content64Encoded,Title,End) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdVatDeclarationsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdVatDeclarationsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdVatDeclarationsMultipart201ApplicationJSON;
}
