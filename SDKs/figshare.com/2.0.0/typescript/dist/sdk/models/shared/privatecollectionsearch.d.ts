import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrivateCollectionSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
export declare enum PrivateCollectionSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateCollectionSearch extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: PrivateCollectionSearchOrderEnum;
    orderDirection?: PrivateCollectionSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
    resourceId?: string;
    searchFor?: string;
}
