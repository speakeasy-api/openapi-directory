import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionUpdatePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionUpdatePathParams;
    request: shared.CollectionUpdate;
    security: PrivateCollectionUpdateSecurity;
}
export declare class PrivateCollectionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
