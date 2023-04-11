import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequestBodyOrderEnum {
    OnestAdvance = "1st advance",
    TwondAdvance = "2nd advance",
    ThreerdAdvance = "3rd advance",
    FourthAdvance = "4th advance",
    Regularization = "regularization"
}
/**
 * A Corporate Tax Declaration to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequestBody extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
    order?: PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequestBodyOrderEnum;
    rate?: number;
    taxBase?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A Corporate Tax Declaration to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
