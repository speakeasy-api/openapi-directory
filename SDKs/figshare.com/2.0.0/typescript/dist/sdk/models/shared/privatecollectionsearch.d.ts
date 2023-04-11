import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field by which to order.
 */
export declare enum PrivateCollectionSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
/**
 * Direction of ordering
 */
export declare enum PrivateCollectionSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Search Parameters
 */
export declare class PrivateCollectionSearch extends SpeakeasyBase {
    /**
     * Only return collections with this doi
     */
    doi?: string;
    /**
     * only return collections from this group
     */
    group?: number;
    /**
     * Only return collections with this handle
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
     * Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    modifiedSince?: string;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * The field by which to order.
     */
    order?: PrivateCollectionSearchOrderEnum;
    /**
     * Direction of ordering
     */
    orderDirection?: PrivateCollectionSearchOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    publishedSince?: string;
    /**
     * Only return collections with this resource_doi
     */
    resourceDoi?: string;
    /**
     * only return collections with this resource_id
     */
    resourceId?: string;
    /**
     * Search term
     */
    searchFor?: string;
}
