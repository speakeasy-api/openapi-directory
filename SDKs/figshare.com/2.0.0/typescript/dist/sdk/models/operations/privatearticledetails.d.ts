import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleDetailsRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Article representation
     */
    articleCompletePrivate?: shared.ArticleCompletePrivate;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
