import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlePrivateLinkPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticlePrivateLinkSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlePrivateLinkRequest extends SpeakeasyBase {
    pathParams: PrivateArticlePrivateLinkPathParams;
    security: PrivateArticlePrivateLinkSecurity;
}
export declare class PrivateArticlePrivateLinkResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateLinks?: shared.PrivateLink[];
    statusCode: number;
}
