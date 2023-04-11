import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailingSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailingRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
/**
 * document to send by mail
 */
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailingRequestBody extends SpeakeasyBase {
    address?: PostSpacesSpaceIdDocumentsDocumentIdMailingRequestBodyAddress;
    name?: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailingRequest extends SpeakeasyBase {
    /**
     * document to send by mail
     */
    requestBody: PostSpacesSpaceIdDocumentsDocumentIdMailingRequestBody;
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
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailing200ApplicationJSON extends SpeakeasyBase {
    pageNb?: number;
    price?: string;
}
export declare class PostSpacesSpaceIdDocumentsDocumentIdMailingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    postSpacesSpaceIdDocumentsDocumentIdMailing200ApplicationJSONObject?: PostSpacesSpaceIdDocumentsDocumentIdMailing200ApplicationJSON;
}
