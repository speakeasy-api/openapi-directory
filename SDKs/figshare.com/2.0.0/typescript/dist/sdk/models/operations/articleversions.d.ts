import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleVersionsPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class ArticleVersionsRequest extends SpeakeasyBase {
    pathParams: ArticleVersionsPathParams;
}
export declare class ArticleVersionsResponse extends SpeakeasyBase {
    articleVersions?: shared.ArticleVersions[];
    contentType: string;
    statusCode: number;
}
