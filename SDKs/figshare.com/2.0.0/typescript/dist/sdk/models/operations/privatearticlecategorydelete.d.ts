import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleCategoryDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleCategoryDeleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Category unique identifier
     */
    categoryId: number;
}
export declare class PrivateArticleCategoryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
