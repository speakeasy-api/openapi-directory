import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionDetailsPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionDetailsPathParams;
    security: PrivateCollectionDetailsSecurity;
}
export declare class PrivateCollectionDetailsResponse extends SpeakeasyBase {
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    statusCode: number;
}
