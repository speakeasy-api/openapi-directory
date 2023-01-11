import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CollectionSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
export declare enum CollectionSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class CollectionSearch extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: CollectionSearchOrderEnum;
    orderDirection?: CollectionSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
    searchFor?: string;
}
