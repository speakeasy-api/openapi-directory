import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum {
    Droplet = "droplet",
    Volume = "volume"
}


export class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];
}
