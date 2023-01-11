import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionCategoryDeletePathParams extends SpeakeasyBase {
    categoryId: number;
    collectionId: number;
}
export declare class PrivateCollectionCategoryDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionCategoryDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionCategoryDeletePathParams;
    security: PrivateCollectionCategoryDeleteSecurity;
}
export declare class PrivateCollectionCategoryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
