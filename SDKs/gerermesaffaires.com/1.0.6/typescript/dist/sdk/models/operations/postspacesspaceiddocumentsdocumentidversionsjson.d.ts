import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Version to add
 */
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsApplicationJSON extends SpeakeasyBase {
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdDocumentsDocumentIdVersionsApplicationJSONFile;
    title: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonRequest extends SpeakeasyBase {
    /**
     * Version to add
     */
    requestBody: PostSpacesSpaceIdDocumentsDocumentIdVersionsApplicationJSON;
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdDocumentsDocumentIdVersionsJSON201ApplicationJSONObject?: PostSpacesSpaceIdDocumentsDocumentIdVersionsJson201ApplicationJSON;
}
