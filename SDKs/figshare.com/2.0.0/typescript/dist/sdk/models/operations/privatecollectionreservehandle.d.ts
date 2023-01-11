import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionReserveHandlePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionReserveHandleSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionReserveHandleRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionReserveHandlePathParams;
    security: PrivateCollectionReserveHandleSecurity;
}
export declare class PrivateCollectionReserveHandleResponse extends SpeakeasyBase {
    collectionHandle?: shared.CollectionHandle;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
