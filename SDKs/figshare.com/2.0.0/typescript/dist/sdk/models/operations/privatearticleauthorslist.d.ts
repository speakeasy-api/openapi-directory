import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleAuthorsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleAuthorsListRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleAuthorsListResponse extends SpeakeasyBase {
    /**
     * OK. Authors list for article
     */
    authors?: shared.Author[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
