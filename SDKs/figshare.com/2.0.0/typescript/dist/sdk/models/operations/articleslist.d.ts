import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ArticlesListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}
export declare enum ArticlesListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ArticlesListQueryParams extends SpeakeasyBase {
    doi?: string;
    group?: number;
    handle?: string;
    institution?: number;
    itemType?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: ArticlesListOrderEnum;
    orderDirection?: ArticlesListOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    resourceDoi?: string;
}
export declare class ArticlesListRequest extends SpeakeasyBase {
    queryParams: ArticlesListQueryParams;
}
export declare class ArticlesListResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
}
