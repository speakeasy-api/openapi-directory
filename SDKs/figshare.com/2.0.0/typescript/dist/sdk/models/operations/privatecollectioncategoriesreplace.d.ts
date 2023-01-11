import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionCategoriesReplacePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionCategoriesReplaceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionCategoriesReplaceRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionCategoriesReplacePathParams;
    request: shared.CategoriesCreator;
    security: PrivateCollectionCategoriesReplaceSecurity;
}
export declare class PrivateCollectionCategoriesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
