import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleDeletePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleDeletePathParams;
    security: PrivateArticleDeleteSecurity;
}
export declare class PrivateArticleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
