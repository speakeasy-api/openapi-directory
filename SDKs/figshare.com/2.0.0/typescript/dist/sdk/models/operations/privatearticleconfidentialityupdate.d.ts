import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleConfidentialityUpdatePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleConfidentialityUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleConfidentialityUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateArticleConfidentialityUpdatePathParams;
    request: shared.ConfidentialityCreator;
    security: PrivateArticleConfidentialityUpdateSecurity;
}
export declare class PrivateArticleConfidentialityUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
