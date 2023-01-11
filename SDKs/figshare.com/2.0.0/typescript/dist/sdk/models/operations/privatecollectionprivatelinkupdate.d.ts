import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionPrivateLinkUpdatePathParams extends SpeakeasyBase {
    collectionId: number;
    linkId: string;
}
export declare class PrivateCollectionPrivateLinkUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionPrivateLinkUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionPrivateLinkUpdatePathParams;
    request?: shared.CollectionPrivateLinkCreator;
    security: PrivateCollectionPrivateLinkUpdateSecurity;
}
export declare class PrivateCollectionPrivateLinkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
