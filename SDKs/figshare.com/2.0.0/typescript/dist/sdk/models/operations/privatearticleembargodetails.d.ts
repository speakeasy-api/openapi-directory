import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleEmbargoDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleEmbargoDetailsRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleEmbargoDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Embargo for article
     */
    articleEmbargo?: shared.ArticleEmbargo;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
