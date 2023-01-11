import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionDeletePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionDeletePathParams;
    security: PrivateCollectionDeleteSecurity;
}
export declare class PrivateCollectionDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
