import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsDocumentIdFoldersRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdFolders200ApplicationJSONFolders extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * document with folders
 */
export declare class GetSpacesSpaceIdDocumentsDocumentIdFolders200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    folderDate?: string;
    folders?: GetSpacesSpaceIdDocumentsDocumentIdFolders200ApplicationJSONFolders[];
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * document with folders
     */
    getSpacesSpaceIdDocumentsDocumentIdFolders200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsDocumentIdFolders200ApplicationJSON;
}
