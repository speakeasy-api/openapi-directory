import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionCreateRequest extends SpeakeasyBase {
    request: shared.CollectionCreate;
    security: PrivateCollectionCreateSecurity;
}
export declare class PrivateCollectionCreateResponse extends SpeakeasyBase {
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
