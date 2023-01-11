import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleConfidentialityDetailsPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleConfidentialityDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleConfidentialityDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateArticleConfidentialityDetailsPathParams;
    security: PrivateArticleConfidentialityDetailsSecurity;
}
export declare class PrivateArticleConfidentialityDetailsResponse extends SpeakeasyBase {
    articleConfidentiality?: shared.ArticleConfidentiality;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
