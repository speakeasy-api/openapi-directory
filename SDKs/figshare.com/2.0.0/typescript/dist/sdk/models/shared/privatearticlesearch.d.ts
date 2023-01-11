import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrivateArticleSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
export declare enum PrivateArticleSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateArticleSearch extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    itemType?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: PrivateArticleSearchOrderEnum;
    orderDirection?: PrivateArticleSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
    resourceId?: string;
    searchFor?: string;
}
