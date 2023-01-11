import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlesSearchSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlesSearchRequest extends SpeakeasyBase {
    request: shared.PrivateArticleSearch;
    security: PrivateArticlesSearchSecurity;
}
export declare class PrivateArticlesSearchResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
