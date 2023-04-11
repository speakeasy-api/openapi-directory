import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A social contract to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRequestBody extends SpeakeasyBase {
    contractDate?: string;
    contractDuration?: string;
    contractualChange?: string;
    position?: string;
    wageDevelopments?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A social contract to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
