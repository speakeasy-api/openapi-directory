import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The field by which to order. Default varies by endpoint/resource.
 */
export declare enum CollectionsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
export declare enum CollectionsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CollectionsListRequest extends SpeakeasyBase {
    /**
     * Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.
     */
    xCursor?: string;
    /**
     * only return collections with this doi
     */
    doi?: string;
    /**
     * only return collections from this group
     */
    group?: number;
    /**
     * only return collections with this handle
     */
    handle?: string;
    /**
     * only return collections from this institution
     */
    institution?: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
     */
    modifiedSince?: string;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * The field by which to order. Default varies by endpoint/resource.
     */
    order?: CollectionsListOrderEnum;
    orderDirection?: CollectionsListOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
     */
    publishedSince?: string;
    /**
     * only return collections with this resource_doi
     */
    resourceDoi?: string;
}
export declare class CollectionsListResponse extends SpeakeasyBase {
    /**
     * OK. An array of collections
     */
    collections?: shared.Collection[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
