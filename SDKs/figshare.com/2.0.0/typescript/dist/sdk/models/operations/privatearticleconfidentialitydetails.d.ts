import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleConfidentialityDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleConfidentialityDetailsRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleConfidentialityDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Article categories
     */
    articleConfidentiality?: shared.ArticleConfidentiality;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
