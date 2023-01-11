import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleAuthorsListPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleAuthorsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleAuthorsListRequest extends SpeakeasyBase {
    pathParams: PrivateArticleAuthorsListPathParams;
    security: PrivateArticleAuthorsListSecurity;
}
export declare class PrivateArticleAuthorsListResponse extends SpeakeasyBase {
    authors?: shared.Author[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
