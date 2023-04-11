import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdDocumentsRequest extends SpeakeasyBase {
    /**
     * Class of document
     */
    class?: string;
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Title of the document
     */
    title?: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    getSpacesSpaceIdFoldersIdDocuments200ApplicationJSONAllOfs?: shared.Document[];
}
