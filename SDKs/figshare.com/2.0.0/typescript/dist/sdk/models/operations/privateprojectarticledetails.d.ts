import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticleDetailsPathParams extends SpeakeasyBase {
    articleId: number;
    projectId: number;
}
export declare class PrivateProjectArticleDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticleDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticleDetailsPathParams;
    security: PrivateProjectArticleDetailsSecurity;
}
export declare class PrivateProjectArticleDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectArticle?: shared.ProjectArticle;
    statusCode: number;
}
