import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleEmbargoDeletePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleEmbargoDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleEmbargoDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleEmbargoDeletePathParams;
    security: PrivateArticleEmbargoDeleteSecurity;
}
export declare class PrivateArticleEmbargoDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
