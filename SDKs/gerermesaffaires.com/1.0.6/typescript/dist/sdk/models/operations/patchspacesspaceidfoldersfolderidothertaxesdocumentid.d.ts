import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A  Tax Declaration to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRequestBody extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
    reference?: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRequest extends SpeakeasyBase {
    /**
     * A  Tax Declaration to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
