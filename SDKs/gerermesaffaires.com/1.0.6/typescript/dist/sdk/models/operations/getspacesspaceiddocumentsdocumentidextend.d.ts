import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsDocumentIdExtendRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdExtend200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extend?: Record<string, any>;
    extension?: string;
    folderDate?: string;
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdExtendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    getSpacesSpaceIdDocumentsDocumentIdExtend200ApplicationJSONAnies?: GetSpacesSpaceIdDocumentsDocumentIdExtend200ApplicationJSON[];
}
