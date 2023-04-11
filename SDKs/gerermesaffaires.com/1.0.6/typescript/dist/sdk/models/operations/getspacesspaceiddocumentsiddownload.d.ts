import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsIdDownloadRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdDocumentsIdDownload200ApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
}
/**
 * content of one document (without folder date)
 */
export declare class GetSpacesSpaceIdDocumentsIdDownload200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    file?: GetSpacesSpaceIdDocumentsIdDownload200ApplicationJSONFile;
    id?: string;
    title?: string;
}
/**
 * content of one document (without folder date)
 */
export declare class GetSpacesSpaceIdDocumentsIdDownload200Wildcard extends SpeakeasyBase {
    file?: Uint8Array;
}
export declare class GetSpacesSpaceIdDocumentsIdDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * content of one document (without folder date)
     */
    getSpacesSpaceIdDocumentsIdDownload200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsIdDownload200ApplicationJSON;
}
