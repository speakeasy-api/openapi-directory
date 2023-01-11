import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionAuthorDeletePathParams extends SpeakeasyBase {
    authorId: number;
    collectionId: number;
}
export declare class PrivateCollectionAuthorDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionAuthorDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionAuthorDeletePathParams;
    security: PrivateCollectionAuthorDeleteSecurity;
}
export declare class PrivateCollectionAuthorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
