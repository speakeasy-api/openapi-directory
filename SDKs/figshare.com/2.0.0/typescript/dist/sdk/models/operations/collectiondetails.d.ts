import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionDetailsPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class CollectionDetailsRequest extends SpeakeasyBase {
    pathParams: CollectionDetailsPathParams;
}
export declare class CollectionDetailsResponse extends SpeakeasyBase {
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    statusCode: number;
}
