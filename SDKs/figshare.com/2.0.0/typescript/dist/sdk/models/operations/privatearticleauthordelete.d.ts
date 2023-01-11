import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleAuthorDeletePathParams extends SpeakeasyBase {
    articleId: number;
    authorId: number;
}
export declare class PrivateArticleAuthorDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleAuthorDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleAuthorDeletePathParams;
    security: PrivateArticleAuthorDeleteSecurity;
}
export declare class PrivateArticleAuthorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
