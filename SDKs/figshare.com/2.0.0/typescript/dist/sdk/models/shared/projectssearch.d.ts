import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field by which to order.
 */
export declare enum ProjectsSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
/**
 * Direction of ordering
 */
export declare enum ProjectsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Search Parameters
 */
export declare class ProjectsSearch extends SpeakeasyBase {
    /**
     * only return collections from this group
     */
    group?: number;
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
    order?: ProjectsSearchOrderEnum;
    /**
     * Direction of ordering
     */
    orderDirection?: ProjectsSearchOrderDirectionEnum;
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
     * Search term
     */
    searchFor?: string;
}
