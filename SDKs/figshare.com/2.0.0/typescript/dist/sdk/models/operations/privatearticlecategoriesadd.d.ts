import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleCategoriesAddSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleCategoriesAddRequest extends SpeakeasyBase {
    categoriesCreator: shared.CategoriesCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleCategoriesAddResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
