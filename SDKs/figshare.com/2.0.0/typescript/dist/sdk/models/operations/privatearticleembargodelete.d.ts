import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleEmbargoDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleEmbargoDeleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleEmbargoDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
