import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MediaAssetAttributesAttachmentTypeEnum {
    Image = "Image",
    Segment = "Segment",
    SegmentList = "SegmentList"
}

export enum MediaAssetAttributesStyleEnum {
    Info = "info",
    Itunes = "itunes",
    Medium = "medium",
    Original = "original",
    Regular = "regular",
    Square400 = "square-400",
    Square640 = "square-640",
    Square888 = "square-888",
    Square3000 = "square-3000",
    StrippedOriginal = "stripped-original",
    Thumb = "thumb",
    WaveformData = "waveform_data"
}


export class MediaAssetAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment_id" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=attachment_type" })
  attachmentType?: MediaAssetAttributesAttachmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cdn_url" })
  cdnUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=size_height" })
  sizeHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=size_width" })
  sizeWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: MediaAssetAttributesStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class MediaAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: MediaAssetAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
