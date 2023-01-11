import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunGarbageCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}

export enum RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}


export class RunGarbageCollection201ApplicationJsonGarbageCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=registry_name" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RunGarbageCollection201ApplicationJsonGarbageCollectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class RunGarbageCollection201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=garbage_collection" })
  garbageCollection?: RunGarbageCollection201ApplicationJsonGarbageCollection;
}


export class RunGarbageCollection401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RunGarbageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunGarbageCollectionPathParams;
}


export class RunGarbageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runGarbageCollection201ApplicationJSONObject?: RunGarbageCollection201ApplicationJson;

  @SpeakeasyMetadata()
  runGarbageCollection401ApplicationJSONObject?: RunGarbageCollection401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
