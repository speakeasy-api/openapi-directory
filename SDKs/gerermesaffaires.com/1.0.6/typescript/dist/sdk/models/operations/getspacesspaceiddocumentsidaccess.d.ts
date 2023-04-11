import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsIdAccessRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdDocumentsIdAccess200ApplicationJSONAccess extends SpeakeasyBase {
    downloadedOn?: string;
    firstName?: string;
    name?: string;
    seenOn?: string;
}
/**
 * accesses of one document (without folder date)
 */
export declare class GetSpacesSpaceIdDocumentsIdAccess200ApplicationJSON extends SpeakeasyBase {
    access?: GetSpacesSpaceIdDocumentsIdAccess200ApplicationJSONAccess[];
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    id?: string;
    title?: string;
}
export declare class GetSpacesSpaceIdDocumentsIdAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * accesses of one document (without folder date)
     */
    getSpacesSpaceIdDocumentsIdAccess200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsIdAccess200ApplicationJSON;
}
