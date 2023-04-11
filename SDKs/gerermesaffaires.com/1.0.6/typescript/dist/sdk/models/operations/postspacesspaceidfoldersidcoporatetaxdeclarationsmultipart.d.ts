import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare enum PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataOrderEnum {
    OnestAdvance = "1st advance",
    TwondAdvance = "2nd advance",
    ThreerdAdvance = "3rd advance",
    FourthAdvance = "4th advance",
    Regularization = "regularization"
}
/**
 * Corporate tax declaration to add (either (DeclarationDate,DocumentId) either (File,Name,Content64Encoded,Title,DeclarationDate) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataAccounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataFile;
    order?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormDataOrderEnum;
    rate?: number;
    taxBase?: number;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartRequest extends SpeakeasyBase {
    /**
     * Corporate tax declaration to add (either (DeclarationDate,DocumentId) either (File,Name,Content64Encoded,Title,DeclarationDate) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMultipart201ApplicationJSON;
}
