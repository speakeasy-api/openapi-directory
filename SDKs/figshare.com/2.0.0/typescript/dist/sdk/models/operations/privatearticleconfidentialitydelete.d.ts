import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleConfidentialityDeletePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleConfidentialityDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleConfidentialityDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleConfidentialityDeletePathParams;
    security: PrivateArticleConfidentialityDeleteSecurity;
}
export declare class PrivateArticleConfidentialityDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
