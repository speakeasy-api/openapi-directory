import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Required Document to add
 */
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidApplicationJSON extends SpeakeasyBase {
    file: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidApplicationJSONFile;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonRequest extends SpeakeasyBase {
    /**
     * Required Document to add
     */
    requestBody: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidApplicationJSON;
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
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidJson201ApplicationJSON;
}
