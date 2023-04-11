import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2OrderEnum {
    OnestAdvance = "1st advance",
    TwondAdvance = "2nd advance",
    ThreerdAdvance = "3rd advance",
    FourthAdvance = "4th advance",
    Regularization = "regularization"
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2Accounting;
    amount?: number;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    file: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2File;
    order?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson2OrderEnum;
    rate?: number;
    taxBase?: number;
    title: string;
}
export declare enum PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson1OrderEnum {
    OnestAdvance = "1st advance",
    TwondAdvance = "2nd advance",
    ThreerdAdvance = "3rd advance",
    FourthAdvance = "4th advance",
    Regularization = "regularization"
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson1 extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
    documentId: string;
    order?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsApplicationJson1OrderEnum;
    rate?: number;
    taxBase?: number;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonRequest extends SpeakeasyBase {
    /**
     * Corporate tax declaration to add (either (DeclarationDate,DocumentId) either (File,Name,Content64Encoded,Title,DeclarationDate) is mandatory)
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
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsJson201ApplicationJSON;
}
