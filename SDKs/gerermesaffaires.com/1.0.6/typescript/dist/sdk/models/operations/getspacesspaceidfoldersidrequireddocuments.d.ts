import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdRequiredDocumentsRequest extends SpeakeasyBase {
    /**
     * Id of the folder either exchange either followup
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdRequiredDocuments200ApplicationJSONStatusEnum {
    Waiting = "waiting",
    Validated = "validated",
    Ended = "ended"
}
export declare class GetSpacesSpaceIdFoldersIdRequiredDocuments200ApplicationJSON extends SpeakeasyBase {
    comment?: string;
    date?: string;
    docIds?: string[];
    id?: string;
    name?: string;
    status?: GetSpacesSpaceIdFoldersIdRequiredDocuments200ApplicationJSONStatusEnum;
}
export declare class GetSpacesSpaceIdFoldersIdRequiredDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of required documents
     */
    getSpacesSpaceIdFoldersIdRequiredDocuments200ApplicationJSONObjects?: GetSpacesSpaceIdFoldersIdRequiredDocuments200ApplicationJSON[];
}
