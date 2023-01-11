import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleVersionDetailsPathParams extends SpeakeasyBase {
    articleId: number;
    vNumber: number;
}
export declare class ArticleVersionDetailsRequest extends SpeakeasyBase {
    pathParams: ArticleVersionDetailsPathParams;
}
export declare class ArticleVersionDetailsResponse extends SpeakeasyBase {
    articleComplete?: shared.ArticleComplete;
    contentType: string;
    statusCode: number;
}
