import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This will be replaced by the relationship `attachment` in a future update.<br/>
 *
 * @remarks
 * The type of the entity this media asset is attached to
 *
 */
export declare enum MediaAssetAttributesAttachmentTypeEnum {
    Image = "Image",
    Segment = "Segment",
    SegmentList = "SegmentList"
}
/**
 * The style of the media asset. A media asset is part of a collection of related media files,
 *
 * @remarks
 * for example an image or an episode (audio). Images usually have differently sized versions,
 * and episodes can have different audio formats.
 *
 */
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
    /**
     * This will be replaced by the relationship `attachment` in a future update.<br/>
     *
     * @remarks
     * The ID of the entity this media asset is attached to
     *
     */
    attachmentId?: string;
    /**
     * This will be replaced by the relationship `attachment` in a future update.<br/>
     *
     * @remarks
     * The type of the entity this media asset is attached to
     *
     */
    attachmentType?: MediaAssetAttributesAttachmentTypeEnum;
    /**
     * The CDN-URL where the media asset is available
     */
    cdnUrl?: string;
    /**
     * The MIME type of the media asset
     */
    contentType?: string;
    createdAt?: Date;
    /**
     * The filename of the media asset without any path components.
     *
     * @remarks
     *
     */
    fileName?: string;
    /**
     * The size in bytes of the media asset
     */
    fileSize?: number;
    /**
     * The height in pixels of the media asset, if the media asset is an image
     */
    sizeHeight?: number;
    /**
     * The width in pixels of the media asset, if the media asset is an image
     */
    sizeWidth?: number;
    /**
     * The style of the media asset. A media asset is part of a collection of related media files,
     *
     * @remarks
     * for example an image or an episode (audio). Images usually have differently sized versions,
     * and episodes can have different audio formats.
     *
     */
    style?: MediaAssetAttributesStyleEnum;
    updatedAt?: Date;
}
export declare class MediaAsset extends SpeakeasyBase {
    attributes?: MediaAssetAttributes;
    id?: string;
    /**
     * The type of resource. This is always `media_assets`
     */
    type?: string;
}
