import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionVersionDetailsPathParams extends SpeakeasyBase {
    collectionId: number;
    versionId: number;
}
export declare class CollectionVersionDetailsRequest extends SpeakeasyBase {
    pathParams: CollectionVersionDetailsPathParams;
}
export declare class CollectionVersionDetailsResponse extends SpeakeasyBase {
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    statusCode: number;
}
