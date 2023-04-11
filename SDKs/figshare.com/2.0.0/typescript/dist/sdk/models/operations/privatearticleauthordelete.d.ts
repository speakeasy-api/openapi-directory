import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleAuthorDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleAuthorDeleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Article Author unique identifier
     */
    authorId: number;
}
export declare class PrivateArticleAuthorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
