import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionPrivateLinkCreatePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionPrivateLinkCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionPrivateLinkCreateRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionPrivateLinkCreatePathParams;
    request?: shared.CollectionPrivateLinkCreator;
    security: PrivateCollectionPrivateLinkCreateSecurity;
}
export declare class PrivateCollectionPrivateLinkCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
