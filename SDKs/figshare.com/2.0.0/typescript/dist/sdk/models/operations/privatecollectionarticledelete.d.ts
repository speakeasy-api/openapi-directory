import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionArticleDeletePathParams extends SpeakeasyBase {
    articleId: number;
    collectionId: number;
}
export declare class PrivateCollectionArticleDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionArticleDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionArticleDeletePathParams;
    security: PrivateCollectionArticleDeleteSecurity;
}
export declare class PrivateCollectionArticleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
