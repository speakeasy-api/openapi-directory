import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleCategoriesListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleCategoriesListRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleCategoriesListResponse extends SpeakeasyBase {
    /**
     * OK. Article categories
     */
    categories?: shared.Category[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
