import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGarbageCollectionPathParams extends SpeakeasyBase {
    registryName: string;
}
export declare enum GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}
export declare class GetGarbageCollection200ApplicationJsonGarbageCollection extends SpeakeasyBase {
    blobsDeleted?: number;
    createdAt?: Date;
    freedBytes?: number;
    registryName?: string;
    status?: GetGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;
    updatedAt?: Date;
    uuid?: string;
}
export declare class GetGarbageCollection200ApplicationJson extends SpeakeasyBase {
    garbageCollection?: GetGarbageCollection200ApplicationJsonGarbageCollection;
}
export declare class GetGarbageCollection401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetGarbageCollectionRequest extends SpeakeasyBase {
    pathParams: GetGarbageCollectionPathParams;
}
export declare class GetGarbageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getGarbageCollection200ApplicationJSONObject?: GetGarbageCollection200ApplicationJson;
    getGarbageCollection401ApplicationJSONObject?: GetGarbageCollection401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
