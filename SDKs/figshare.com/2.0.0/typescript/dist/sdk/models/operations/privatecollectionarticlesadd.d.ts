import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionArticlesAddPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionArticlesAddSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionArticlesAddRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionArticlesAddPathParams;
    request: shared.ArticlesCreator;
    security: PrivateCollectionArticlesAddSecurity;
}
export declare class PrivateCollectionArticlesAddResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
