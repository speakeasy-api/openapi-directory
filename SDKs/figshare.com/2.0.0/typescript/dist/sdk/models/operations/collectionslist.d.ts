import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
export declare class CollectionsListQueryParams extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: CollectionsListOrderEnum;
    orderDirection?: CollectionsListOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
}
export declare class CollectionsListRequest extends SpeakeasyBase {
    queryParams: CollectionsListQueryParams;
}
export declare class CollectionsListResponse extends SpeakeasyBase {
    collections?: shared.Collection[];
    contentType: string;
    statusCode: number;
}
