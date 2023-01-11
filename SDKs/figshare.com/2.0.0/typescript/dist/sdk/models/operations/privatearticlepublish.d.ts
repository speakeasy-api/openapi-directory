import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticlePublishPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticlePublishSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticlePublishRequest extends SpeakeasyBase {
    pathParams: PrivateArticlePublishPathParams;
    security: PrivateArticlePublishSecurity;
}
export declare class PrivateArticlePublishResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
