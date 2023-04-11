import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleFileDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleFileDeleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * File unique identifier
     */
    fileId: number;
}
export declare class PrivateArticleFileDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
