import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleDetailsPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class ArticleDetailsRequest extends SpeakeasyBase {
    pathParams: ArticleDetailsPathParams;
}
export declare class ArticleDetailsResponse extends SpeakeasyBase {
    articleComplete?: shared.ArticleComplete;
    contentType: string;
    statusCode: number;
}
