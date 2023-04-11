import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdDocumentClassRequest extends SpeakeasyBase {
    /**
     * class of the document
     */
    documentClass: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdDocumentClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    getSpacesSpaceIdFoldersIdDocumentClass200ApplicationJSONAllOfs?: shared.Document[];
}
