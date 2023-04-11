import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatabaseListDocumentsSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class DatabaseListDocumentsRequest extends SpeakeasyBase {
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     */
    collectionId: string;
    /**
     * Array of filter strings. Each filter is constructed from a key name, comparison operator (=, !=, >, <, <=, >=) and a value. You can also use a dot (.) separator in attribute names to filter by child document attributes. Examples: 'name=John Doe' or 'category.$id>=5bed2d152c362'.
     */
    filters?: string[];
    /**
     * Maximum number of documents to return in response.  Use this value to manage pagination. By default will return maximum 25 results. Maximum of 100 results allowed per request.
     */
    limit?: number;
    /**
     * Offset value. The default value is 0. Use this param to manage pagination.
     */
    offset?: number;
    /**
     * Order field type casting. Possible values are int, string, date, time or datetime. The database will attempt to cast the order field to the value you pass here. The default value is a string.
     */
    orderCast?: string;
    /**
     * Document field that results will be sorted by.
     */
    orderField?: string;
    /**
     * Order direction. Possible values are DESC for descending order, or ASC for ascending order.
     */
    orderType?: string;
    /**
     * Search query. Enter any free text search. The database will try to find a match against all document attributes and children. Max length: 256 chars.
     */
    search?: string;
}
export declare class DatabaseListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Documents List
     */
    documentList?: shared.DocumentList;
}
