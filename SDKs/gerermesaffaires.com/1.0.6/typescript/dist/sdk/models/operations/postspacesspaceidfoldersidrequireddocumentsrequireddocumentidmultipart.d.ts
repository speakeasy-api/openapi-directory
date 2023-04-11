import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Required Document to add
 */
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartFormData extends SpeakeasyBase {
    file: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartFormDataFile;
    name: string;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartRequest extends SpeakeasyBase {
    /**
     * Required Document to add
     */
    requestBody: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartFormData;
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
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMultipart201ApplicationJSON;
}
