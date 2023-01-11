import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleCategoriesListPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleCategoriesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleCategoriesListRequest extends SpeakeasyBase {
    pathParams: PrivateArticleCategoriesListPathParams;
    security: PrivateArticleCategoriesListSecurity;
}
export declare class PrivateArticleCategoriesListResponse extends SpeakeasyBase {
    categories?: shared.Category[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
