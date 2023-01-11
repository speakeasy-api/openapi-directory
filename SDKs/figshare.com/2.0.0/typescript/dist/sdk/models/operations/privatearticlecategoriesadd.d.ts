import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleCategoriesAddPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleCategoriesAddSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleCategoriesAddRequest extends SpeakeasyBase {
    pathParams: PrivateArticleCategoriesAddPathParams;
    request: shared.CategoriesCreator;
    security: PrivateArticleCategoriesAddSecurity;
}
export declare class PrivateArticleCategoriesAddResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
