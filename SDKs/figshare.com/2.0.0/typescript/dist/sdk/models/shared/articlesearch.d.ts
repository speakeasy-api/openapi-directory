import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArticleSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
export declare enum ArticleSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ArticleSearch extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    itemType?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: ArticleSearchOrderEnum;
    orderDirection?: ArticleSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
    searchFor?: string;
}
