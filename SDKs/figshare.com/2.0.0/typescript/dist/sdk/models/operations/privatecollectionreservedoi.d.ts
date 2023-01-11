import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionReserveDoiPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionReserveDoiSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionReserveDoiRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionReserveDoiPathParams;
    security: PrivateCollectionReserveDoiSecurity;
}
export declare class PrivateCollectionReserveDoiResponse extends SpeakeasyBase {
    collectionDOI?: shared.CollectionDoi;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
