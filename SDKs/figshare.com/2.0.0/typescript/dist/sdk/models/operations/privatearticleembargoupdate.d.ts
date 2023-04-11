import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleEmbargoUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleEmbargoUpdateRequest extends SpeakeasyBase {
    /**
     * Embargo description
     */
    articleEmbargoUpdater: shared.ArticleEmbargoUpdater;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleEmbargoUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
