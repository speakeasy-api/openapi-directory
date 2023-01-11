import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleEmbargoDetailsPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleEmbargoDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleEmbargoDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateArticleEmbargoDetailsPathParams;
    security: PrivateArticleEmbargoDetailsSecurity;
}
export declare class PrivateArticleEmbargoDetailsResponse extends SpeakeasyBase {
    articleEmbargo?: shared.ArticleEmbargo;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
