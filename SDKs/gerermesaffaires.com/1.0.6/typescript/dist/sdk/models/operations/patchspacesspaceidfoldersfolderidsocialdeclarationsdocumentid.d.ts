import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A  Social Declaration to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRequestBody extends SpeakeasyBase {
    amount?: number;
    declarationDate?: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A  Social Declaration to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
