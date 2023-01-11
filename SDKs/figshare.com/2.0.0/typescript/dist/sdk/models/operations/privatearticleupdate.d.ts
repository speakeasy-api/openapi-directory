import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleUpdatePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateArticleUpdatePathParams;
    request: shared.ArticleUpdate;
    security: PrivateArticleUpdateSecurity;
}
export declare class PrivateArticleUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
