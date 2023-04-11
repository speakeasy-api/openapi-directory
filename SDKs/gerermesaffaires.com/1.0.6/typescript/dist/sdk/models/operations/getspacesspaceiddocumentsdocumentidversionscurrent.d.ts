import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentRequest extends SpeakeasyBase {
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
 * current version of the document
 */
export declare class GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrent200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * current version of the document
     */
    getSpacesSpaceIdDocumentsDocumentIdVersionsCurrent200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsDocumentIdVersionsCurrent200ApplicationJSON;
}
