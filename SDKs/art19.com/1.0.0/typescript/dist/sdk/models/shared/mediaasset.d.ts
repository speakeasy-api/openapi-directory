import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediaAssetAttributesAttachmentTypeEnum {
    Image = "Image",
    Segment = "Segment",
    SegmentList = "SegmentList"
}
export declare enum MediaAssetAttributesStyleEnum {
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
export declare class MediaAssetAttributes extends SpeakeasyBase {
    attachmentId?: string;
    attachmentType?: MediaAssetAttributesAttachmentTypeEnum;
    cdnUrl?: string;
    contentType?: string;
    createdAt?: Date;
    fileName?: string;
    fileSize?: number;
    sizeHeight?: number;
    sizeWidth?: number;
    style?: MediaAssetAttributesStyleEnum;
    updatedAt?: Date;
}
export declare class MediaAsset extends SpeakeasyBase {
    attributes?: MediaAssetAttributes;
    id?: string;
    type?: string;
}
