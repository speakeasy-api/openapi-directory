import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionPrivateLinkDeletePathParams extends SpeakeasyBase {
    collectionId: number;
    linkId: string;
}
export declare class PrivateCollectionPrivateLinkDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionPrivateLinkDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionPrivateLinkDeletePathParams;
    security: PrivateCollectionPrivateLinkDeleteSecurity;
}
export declare class PrivateCollectionPrivateLinkDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
