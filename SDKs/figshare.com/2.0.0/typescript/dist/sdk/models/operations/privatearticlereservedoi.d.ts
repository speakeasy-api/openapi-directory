import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleReserveDoiPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleReserveDoiSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleReserveDoiRequest extends SpeakeasyBase {
    pathParams: PrivateArticleReserveDoiPathParams;
    security: PrivateArticleReserveDoiSecurity;
}
export declare class PrivateArticleReserveDoiResponse extends SpeakeasyBase {
    articleDOI?: shared.ArticleDoi;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
