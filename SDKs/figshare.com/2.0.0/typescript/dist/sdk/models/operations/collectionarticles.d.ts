import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionArticlesPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class CollectionArticlesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class CollectionArticlesRequest extends SpeakeasyBase {
    pathParams: CollectionArticlesPathParams;
    queryParams: CollectionArticlesQueryParams;
}
export declare class CollectionArticlesResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
}
