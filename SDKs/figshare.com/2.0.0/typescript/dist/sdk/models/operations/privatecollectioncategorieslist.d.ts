import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionCategoriesListPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionCategoriesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionCategoriesListRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionCategoriesListPathParams;
    security: PrivateCollectionCategoriesListSecurity;
}
export declare class PrivateCollectionCategoriesListResponse extends SpeakeasyBase {
    categories?: shared.Category[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
