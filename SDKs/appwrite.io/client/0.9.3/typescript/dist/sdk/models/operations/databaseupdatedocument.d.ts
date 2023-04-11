import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DatabaseUpdateDocumentSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class DatabaseUpdateDocumentRequestBody extends SpeakeasyBase {
    /**
     * Document data as JSON object.
     */
    data: Record<string, any>;
    /**
     * An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    read?: string[];
    /**
     * An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    write?: string[];
}
export declare class DatabaseUpdateDocumentRequest extends SpeakeasyBase {
    requestBody?: DatabaseUpdateDocumentRequestBody;
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     */
    collectionId: string;
    /**
     * Document unique ID.
     */
    documentId: string;
}
export declare class DatabaseUpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document
     */
    document?: Record<string, any>;
}
