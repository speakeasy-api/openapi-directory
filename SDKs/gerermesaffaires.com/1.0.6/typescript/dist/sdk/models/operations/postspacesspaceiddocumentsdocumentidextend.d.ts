import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdDocumentsDocumentIdExtendSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdExtendRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
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
export declare class PostSpacesSpaceIdDocumentsDocumentIdExtend201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdExtendResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdDocumentsDocumentIdExtend201ApplicationJSONObject?: PostSpacesSpaceIdDocumentsDocumentIdExtend201ApplicationJSON;
}
