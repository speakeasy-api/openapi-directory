import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlePrivateLinkCreatePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticlePrivateLinkCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlePrivateLinkCreateRequest extends SpeakeasyBase {
    pathParams: PrivateArticlePrivateLinkCreatePathParams;
    request?: shared.PrivateLinkCreator;
    security: PrivateArticlePrivateLinkCreateSecurity;
}
export declare class PrivateArticlePrivateLinkCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
