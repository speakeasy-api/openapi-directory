import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBodyAccountEnum {
    Cab = "CAB",
    Ikm = "IKM",
    Prk = "PRK",
    Txi = "TXI",
    Voy = "VOY",
    Ptt = "PTT",
    Fhr = "FHR",
    Div = "DIV",
    Res = "RES"
}
export declare enum PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBodyStatusEnum {
    R = "R",
    V = "V",
    W = "W"
}
/**
 * An expense proof to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBody extends SpeakeasyBase {
    account?: PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBodyAccountEnum;
    archivalDate?: string;
    beforeVAT?: number;
    expenseDate?: string;
    expenseReportId?: string;
    provider?: string;
    reason?: string;
    status?: PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBodyStatusEnum;
    vat?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequest extends SpeakeasyBase {
    /**
     * An expense proof to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdRequestBody;
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
