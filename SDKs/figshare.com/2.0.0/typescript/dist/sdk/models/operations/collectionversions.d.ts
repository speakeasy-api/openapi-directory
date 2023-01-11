import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionVersionsPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class CollectionVersionsRequest extends SpeakeasyBase {
    pathParams: CollectionVersionsPathParams;
}
export declare class CollectionVersionsResponse extends SpeakeasyBase {
    collectionVersions?: shared.CollectionVersions[];
    contentType: string;
    statusCode: number;
}
