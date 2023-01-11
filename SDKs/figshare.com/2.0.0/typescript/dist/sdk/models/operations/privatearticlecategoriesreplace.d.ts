import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleCategoriesReplacePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleCategoriesReplaceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleCategoriesReplaceRequest extends SpeakeasyBase {
    pathParams: PrivateArticleCategoriesReplacePathParams;
    request: shared.CategoriesCreator;
    security: PrivateArticleCategoriesReplaceSecurity;
}
export declare class PrivateArticleCategoriesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
