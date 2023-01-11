import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticleDeletePathParams extends SpeakeasyBase {
    articleId: number;
    projectId: number;
}
export declare class PrivateProjectArticleDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticleDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticleDeletePathParams;
    security: PrivateProjectArticleDeleteSecurity;
}
export declare class PrivateProjectArticleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
