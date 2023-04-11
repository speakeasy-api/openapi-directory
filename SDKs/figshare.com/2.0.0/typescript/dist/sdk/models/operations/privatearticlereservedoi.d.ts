import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleReserveDoiSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleReserveDoiRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleReserveDoiResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleDOI?: shared.ArticleDOI;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
