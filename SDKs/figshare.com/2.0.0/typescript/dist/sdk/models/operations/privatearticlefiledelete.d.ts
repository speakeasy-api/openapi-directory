import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleFileDeletePathParams extends SpeakeasyBase {
    articleId: number;
    fileId: number;
}
export declare class PrivateArticleFileDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleFileDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleFileDeletePathParams;
    security: PrivateArticleFileDeleteSecurity;
}
export declare class PrivateArticleFileDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
