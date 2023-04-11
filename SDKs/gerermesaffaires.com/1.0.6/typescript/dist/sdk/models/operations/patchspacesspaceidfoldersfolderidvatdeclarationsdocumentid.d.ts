import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A VAT Declaration to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRequestBody extends SpeakeasyBase {
    begin?: string;
    collectedVAT?: number;
    creditVAT?: number;
    deductibleVAT?: number;
    end?: string;
    exemptTurnover?: number;
    number?: string;
    payableVAT?: number;
    taxableTurnover?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A VAT Declaration to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
