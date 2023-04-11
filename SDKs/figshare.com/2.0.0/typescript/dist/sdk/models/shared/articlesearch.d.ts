import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field by which to order
 */
export declare enum ArticleSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
/**
 * Direction of ordering
 */
export declare enum ArticleSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Search Parameters
 */
export declare class ArticleSearch extends SpeakeasyBase {
    /**
     * Only return articles with this doi
     */
    doi?: string;
    /**
     * only return collections from this group
     */
    group?: number;
    /**
     * Only return articles with this handle
     */
    handle?: string;
    /**
     * only return collections from this institution
     */
    institution?: number;
    /**
     * Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model
     */
    itemType?: number;
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
     * The field by which to order
     */
    order?: ArticleSearchOrderEnum;
    /**
     * Direction of ordering
     */
    orderDirection?: ArticleSearchOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Only return articles in this project
     */
    projectId?: number;
    /**
     * Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    publishedSince?: string;
    /**
     * Only return articles with this resource_doi
     */
    resourceDoi?: string;
    /**
     * Search term
     */
    searchFor?: string;
}
