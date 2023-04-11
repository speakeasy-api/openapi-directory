import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticlesSearchSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticlesSearchResponse extends SpeakeasyBase {
    /**
     * OK. An array of articles
     */
    articleWithProjects?: shared.ArticleWithProject[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
