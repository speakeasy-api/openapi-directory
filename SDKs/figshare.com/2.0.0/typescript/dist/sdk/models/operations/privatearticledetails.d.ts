import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleDetailsPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateArticleDetailsPathParams;
    security: PrivateArticleDetailsSecurity;
}
export declare class PrivateArticleDetailsResponse extends SpeakeasyBase {
    articleCompletePrivate?: shared.ArticleCompletePrivate;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
