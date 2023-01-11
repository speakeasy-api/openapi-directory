import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGarbageCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=garbage_collection_uuid" })
  garbageCollectionUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class UpdateGarbageCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancel" })
  cancel?: boolean;
}

export enum UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}


export class UpdateGarbageCollection200ApplicationJsonGarbageCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=registry_name" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateGarbageCollection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=garbage_collection" })
  garbageCollection?: UpdateGarbageCollection200ApplicationJsonGarbageCollection;
}


export class UpdateGarbageCollection401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateGarbageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGarbageCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGarbageCollectionRequestBody;
}


export class UpdateGarbageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGarbageCollection200ApplicationJSONObject?: UpdateGarbageCollection200ApplicationJson;

  @SpeakeasyMetadata()
  updateGarbageCollection401ApplicationJSONObject?: UpdateGarbageCollection401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
