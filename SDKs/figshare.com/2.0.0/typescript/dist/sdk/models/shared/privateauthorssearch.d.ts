import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field by which to order. Default varies by endpoint/resource.
 */
export declare enum PrivateAuthorsSearchOrderEnum {
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
export declare enum PrivateAuthorsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Search Parameters
 */
export declare class PrivateAuthorsSearch extends SpeakeasyBase {
    /**
     * Return only authors in this group or subgroups of the group
     */
    groupId?: number;
    /**
     * Return only authors associated to this institution
     */
    institutionId?: number;
    /**
     * Return only active authors if True
     */
    isActive?: boolean;
    /**
     * Return only authors that have published items if True
     */
    isPublic?: boolean;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * Orcid of author
     */
    orcid?: string;
    /**
     * The field by which to order. Default varies by endpoint/resource.
     */
    order?: PrivateAuthorsSearchOrderEnum;
    /**
     * Direction of ordering
     */
    orderDirection?: PrivateAuthorsSearchOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Search term
     */
    searchFor?: string;
}
