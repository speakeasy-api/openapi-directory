import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlePrivateLinkUpdatePathParams extends SpeakeasyBase {
    articleId: number;
    linkId: string;
}
export declare class PrivateArticlePrivateLinkUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlePrivateLinkUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateArticlePrivateLinkUpdatePathParams;
    request?: shared.PrivateLinkCreator;
    security: PrivateArticlePrivateLinkUpdateSecurity;
}
export declare class PrivateArticlePrivateLinkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
