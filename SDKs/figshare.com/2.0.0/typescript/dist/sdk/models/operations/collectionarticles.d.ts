import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionArticlesRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
}
export declare class CollectionArticlesResponse extends SpeakeasyBase {
    /**
     * OK. An array of articles belonging to the collection
     */
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
