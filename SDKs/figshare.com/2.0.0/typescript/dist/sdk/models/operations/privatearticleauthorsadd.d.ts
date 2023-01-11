import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleAuthorsAddPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleAuthorsAddSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleAuthorsAddRequest extends SpeakeasyBase {
    pathParams: PrivateArticleAuthorsAddPathParams;
    request: shared.AuthorsCreator;
    security: PrivateArticleAuthorsAddSecurity;
}
export declare class PrivateArticleAuthorsAddResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
