import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleAuthorsReplacePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleAuthorsReplaceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleAuthorsReplaceRequest extends SpeakeasyBase {
    pathParams: PrivateArticleAuthorsReplacePathParams;
    request: shared.AuthorsCreator;
    security: PrivateArticleAuthorsReplaceSecurity;
}
export declare class PrivateArticleAuthorsReplaceResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
