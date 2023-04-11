import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ArticleVersionUpdateRequest extends SpeakeasyBase {
    /**
     * Article description
     */
    articleUpdate: shared.ArticleUpdate;
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Article version identifier
     */
    versionId: number;
}
export declare class ArticleVersionUpdateResponse extends SpeakeasyBase {
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
