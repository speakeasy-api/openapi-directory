import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleUpdateRequest extends SpeakeasyBase {
    /**
     * Article description
     */
    articleUpdate: shared.ArticleUpdate;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Reset Content
     */
    locationWarningsUpdate?: shared.LocationWarningsUpdate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
