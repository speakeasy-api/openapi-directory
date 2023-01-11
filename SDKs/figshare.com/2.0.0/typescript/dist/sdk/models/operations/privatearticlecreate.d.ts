import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleCreateRequest extends SpeakeasyBase {
    request: shared.ArticleCreate;
    security: PrivateArticleCreateSecurity;
}
export declare class PrivateArticleCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    location?: shared.Location;
    statusCode: number;
}
