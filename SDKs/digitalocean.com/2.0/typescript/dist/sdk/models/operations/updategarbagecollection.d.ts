import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGarbageCollectionPathParams extends SpeakeasyBase {
    garbageCollectionUuid: string;
    registryName: string;
}
export declare class UpdateGarbageCollectionRequestBody extends SpeakeasyBase {
    cancel?: boolean;
}
export declare enum UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}
export declare class UpdateGarbageCollection200ApplicationJsonGarbageCollection extends SpeakeasyBase {
    blobsDeleted?: number;
    createdAt?: Date;
    freedBytes?: number;
    registryName?: string;
    status?: UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;
    updatedAt?: Date;
    uuid?: string;
}
export declare class UpdateGarbageCollection200ApplicationJson extends SpeakeasyBase {
    garbageCollection?: UpdateGarbageCollection200ApplicationJsonGarbageCollection;
}
export declare class UpdateGarbageCollection401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateGarbageCollectionRequest extends SpeakeasyBase {
    pathParams: UpdateGarbageCollectionPathParams;
    request: UpdateGarbageCollectionRequestBody;
}
export declare class UpdateGarbageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateGarbageCollection200ApplicationJSONObject?: UpdateGarbageCollection200ApplicationJson;
    updateGarbageCollection401ApplicationJSONObject?: UpdateGarbageCollection401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
