import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlePrivateLinkDeletePathParams extends SpeakeasyBase {
    articleId: number;
    linkId: string;
}
export declare class PrivateArticlePrivateLinkDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlePrivateLinkDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticlePrivateLinkDeletePathParams;
    security: PrivateArticlePrivateLinkDeleteSecurity;
}
export declare class PrivateArticlePrivateLinkDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
