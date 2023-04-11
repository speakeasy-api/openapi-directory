import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum {
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
export declare class PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum;
    yearMonth?: string;
}
/**
 * document to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdDocumentsDocumentIdRequestBody extends SpeakeasyBase {
    accounting?: PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    title?: string;
}
export declare class PatchSpacesSpaceIdDocumentsDocumentIdRequest extends SpeakeasyBase {
    /**
     * document to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdDocumentsDocumentIdRequestBody;
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdDocumentsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
