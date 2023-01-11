import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleReserveHandlePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleReserveHandleSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleReserveHandleRequest extends SpeakeasyBase {
    pathParams: PrivateArticleReserveHandlePathParams;
    security: PrivateArticleReserveHandleSecurity;
}
export declare class PrivateArticleReserveHandleResponse extends SpeakeasyBase {
    articleHandle?: shared.ArticleHandle;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
