import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DatabaseDeleteDocumentSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class DatabaseDeleteDocumentRequest extends SpeakeasyBase {
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     */
    collectionId: string;
    /**
     * Document unique ID.
     */
    documentId: string;
}
export declare class DatabaseDeleteDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
