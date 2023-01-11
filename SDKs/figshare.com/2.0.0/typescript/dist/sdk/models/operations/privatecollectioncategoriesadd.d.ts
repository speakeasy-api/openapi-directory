import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionCategoriesAddPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionCategoriesAddSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionCategoriesAddRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionCategoriesAddPathParams;
    request: shared.CategoriesCreator;
    security: PrivateCollectionCategoriesAddSecurity;
}
export declare class PrivateCollectionCategoriesAddResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
