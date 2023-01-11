import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum {
    Requested = "requested",
    WaitingForWriteJwTsToExpire = "waiting for write JWTs to expire",
    ScanningManifests = "scanning manifests",
    DeletingUnreferencedBlobs = "deleting unreferenced blobs",
    Cancelling = "cancelling",
    Failed = "failed",
    Succeeded = "succeeded",
    Cancelled = "cancelled"
}


export class Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobs_deleted" })
  blobsDeleted?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=freed_bytes" })
  freedBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=registry_name" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
