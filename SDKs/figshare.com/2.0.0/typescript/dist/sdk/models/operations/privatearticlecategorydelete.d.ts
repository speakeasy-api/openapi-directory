import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleCategoryDeletePathParams extends SpeakeasyBase {
    articleId: number;
    categoryId: number;
}
export declare class PrivateArticleCategoryDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleCategoryDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleCategoryDeletePathParams;
    security: PrivateArticleCategoryDeleteSecurity;
}
export declare class PrivateArticleCategoryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
