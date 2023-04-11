import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DatabaseCreateDocumentSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class DatabaseCreateDocumentRequestBody extends SpeakeasyBase {
    /**
     * Document data as JSON object.
     */
    data: Record<string, any>;
    /**
     * Parent document unique ID. Use when you want your new document to be a child of a parent document.
     */
    parentDocument?: string;
    /**
     * Parent document property name. Use when you want your new document to be a child of a parent document.
     */
    parentProperty?: string;
    /**
     * Parent document property connection type. You can set this value to **assign**, **append** or **prepend**, default value is assign. Use when you want your new document to be a child of a parent document.
     */
    parentPropertyType?: string;
    /**
     * An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    read?: string[];
    /**
     * An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    write?: string[];
}
export declare class DatabaseCreateDocumentRequest extends SpeakeasyBase {
    requestBody?: DatabaseCreateDocumentRequestBody;
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     */
    collectionId: string;
}
export declare class DatabaseCreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document
     */
    document?: Record<string, any>;
}
