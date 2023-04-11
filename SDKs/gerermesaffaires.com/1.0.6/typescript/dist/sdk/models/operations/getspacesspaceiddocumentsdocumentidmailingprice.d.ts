import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdDocumentsDocumentIdMailingpriceSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdMailingpriceRequest extends SpeakeasyBase {
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
 * A list of documents of the folder
 */
export declare class GetSpacesSpaceIdDocumentsDocumentIdMailingprice200ApplicationJSON extends SpeakeasyBase {
    pageNb?: number;
    price?: string;
}
export declare class GetSpacesSpaceIdDocumentsDocumentIdMailingpriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    getSpacesSpaceIdDocumentsDocumentIdMailingprice200ApplicationJSONObject?: GetSpacesSpaceIdDocumentsDocumentIdMailingprice200ApplicationJSON;
}
