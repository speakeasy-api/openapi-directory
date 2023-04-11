import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsRequest extends SpeakeasyBase {
    /**
     * class of the document to find
     */
    class?: string;
    /**
     * Text to find
     */
    fullText?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdDocuments200ApplicationJSONFolders extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetSpacesSpaceIdDocuments200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    folders?: GetSpacesSpaceIdDocuments200ApplicationJSONFolders[];
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents returned by the search
     */
    getSpacesSpaceIdDocuments200ApplicationJSONObjects?: GetSpacesSpaceIdDocuments200ApplicationJSON[];
}
