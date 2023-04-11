import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A bank statement to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRequestBody extends SpeakeasyBase {
    balance?: number;
    number?: number;
    statementDate?: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A bank statement to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
