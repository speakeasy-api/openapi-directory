import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleVersionUpdateThumbPathParams extends SpeakeasyBase {
    articleId: number;
    versionId: number;
}
export declare class ArticleVersionUpdateThumbSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ArticleVersionUpdateThumbRequest extends SpeakeasyBase {
    pathParams: ArticleVersionUpdateThumbPathParams;
    request: shared.FileId;
    security: ArticleVersionUpdateThumbSecurity;
}
export declare class ArticleVersionUpdateThumbResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
