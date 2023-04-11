import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleCategoriesReplaceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleCategoriesReplaceRequest extends SpeakeasyBase {
    categoriesCreator: shared.CategoriesCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleCategoriesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
