import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleVersionConfidentialityPathParams extends SpeakeasyBase {
    articleId: number;
    vNumber: number;
}
export declare class ArticleVersionConfidentialityRequest extends SpeakeasyBase {
    pathParams: ArticleVersionConfidentialityPathParams;
}
export declare class ArticleVersionConfidentialityResponse extends SpeakeasyBase {
    articleConfidentiality?: shared.ArticleConfidentiality;
    contentType: string;
    statusCode: number;
}
