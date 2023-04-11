import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdRequest extends SpeakeasyBase {
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
export declare class DeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
