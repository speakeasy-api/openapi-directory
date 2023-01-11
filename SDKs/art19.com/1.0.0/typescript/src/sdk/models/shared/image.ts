import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum ImageAttributesBucketTypeEnum {
    AdRepAccount = "AdRepAccount",
    Agency = "Agency",
    Network = "Network",
    Series = "Series",
    User = "User"
}


export class ImageAttributesTheCropAreaWithinTheOriginalMediaAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}

export enum ImageAttributesStatusEnum {
    Invalid = "invalid",
    Processing = "processing",
    Uploaded = "uploaded",
    Valid = "valid"
}


export class ImageAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket_id" })
  bucketId?: string;

  @SpeakeasyMetadata({ data: "json, name=bucket_type" })
  bucketType?: ImageAttributesBucketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=crop_data" })
  cropData?: ImageAttributesTheCropAreaWithinTheOriginalMediaAsset;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImageAttributesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ImageRelationshipsAllMediaAssetsAvailableForThisImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceIdentifier })
  data?: ResourceIdentifier[];
}


export class ImageRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media_assets" })
  mediaAssets?: ImageRelationshipsAllMediaAssetsAvailableForThisImage;
}


export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ImageAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: ImageRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
