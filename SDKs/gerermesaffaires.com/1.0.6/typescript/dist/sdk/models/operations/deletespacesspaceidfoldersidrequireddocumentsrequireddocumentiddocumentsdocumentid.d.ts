import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdRequest extends SpeakeasyBase {
    /**
     * Id of the document to delete
     */
    documentId: string;
    /**
     * Id of the folder exchange or followup
     */
    id: string;
    /**
     * Id of the requireddocument
     */
    requireddocumentid: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
