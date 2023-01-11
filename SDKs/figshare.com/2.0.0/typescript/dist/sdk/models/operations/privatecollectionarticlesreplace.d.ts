import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionArticlesReplacePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionArticlesReplaceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionArticlesReplaceRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionArticlesReplacePathParams;
    request: shared.ArticlesCreator;
    security: PrivateCollectionArticlesReplaceSecurity;
}
export declare class PrivateCollectionArticlesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
