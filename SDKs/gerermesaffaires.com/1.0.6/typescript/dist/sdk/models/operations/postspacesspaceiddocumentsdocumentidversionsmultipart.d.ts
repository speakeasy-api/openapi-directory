import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Version to add
 */
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartFormData extends SpeakeasyBase {
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartFormDataFile;
    title: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartRequest extends SpeakeasyBase {
    /**
     * Version to add
     */
    requestBody: PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartFormData;
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
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdDocumentsDocumentIdVersionsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdDocumentsDocumentIdVersionsMultipart201ApplicationJSON;
}
