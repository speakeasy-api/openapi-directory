import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleAuthorsAddSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleAuthorsAddRequest extends SpeakeasyBase {
    /**
     * Authors description
     */
    authorsCreator: shared.AuthorsCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleAuthorsAddResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
