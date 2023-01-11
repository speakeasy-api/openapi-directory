import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunGarbageCollectionPathParams extends SpeakeasyBase {
    registryName: string;
}
export declare enum RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}
export declare class RunGarbageCollection201ApplicationJsonGarbageCollection extends SpeakeasyBase {
    blobsDeleted?: number;
    createdAt?: Date;
    freedBytes?: number;
    registryName?: string;
    status?: RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum;
    updatedAt?: Date;
    uuid?: string;
}
export declare class RunGarbageCollection201ApplicationJson extends SpeakeasyBase {
    garbageCollection?: RunGarbageCollection201ApplicationJsonGarbageCollection;
}
export declare class RunGarbageCollection401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RunGarbageCollectionRequest extends SpeakeasyBase {
    pathParams: RunGarbageCollectionPathParams;
}
export declare class RunGarbageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    runGarbageCollection201ApplicationJSONObject?: RunGarbageCollection201ApplicationJson;
    runGarbageCollection401ApplicationJSONObject?: RunGarbageCollection401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
