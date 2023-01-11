import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionArticlesListPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionArticlesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionArticlesListRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionArticlesListPathParams;
    security: PrivateCollectionArticlesListSecurity;
}
export declare class PrivateCollectionArticlesListResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
