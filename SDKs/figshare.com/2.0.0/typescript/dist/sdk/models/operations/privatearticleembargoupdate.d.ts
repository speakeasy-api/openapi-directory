import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleEmbargoUpdatePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleEmbargoUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleEmbargoUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateArticleEmbargoUpdatePathParams;
    request: shared.ArticleEmbargoUpdater;
    security: PrivateArticleEmbargoUpdateSecurity;
}
export declare class PrivateArticleEmbargoUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
