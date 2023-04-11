import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * An expense report to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRequestBody extends SpeakeasyBase {
    beforeVAT?: number;
    expenseDate?: string;
    inclVAT?: number;
    processingDate?: string;
    vat?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRequest extends SpeakeasyBase {
    /**
     * An expense report to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
