import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * This will be replaced by the relationship `bucket` in a future update.<br/>
 *
 * @remarks
 * The type of the owning entity
 *
 */
export declare enum ImageAttributesBucketTypeEnum {
    AdRepAccount = "AdRepAccount",
    Agency = "Agency",
    Network = "Network",
    Series = "Series",
    User = "User"
}
export declare class ImageAttributesTheCropAreaWithinTheOriginalMediaAsset extends SpeakeasyBase {
    /**
     * The height of the crop area
     */
    height?: number;
    /**
     * The left coordinate of the crop area
     */
    left?: number;
    /**
     * The top coordinate of the crop area
     */
    top?: number;
    /**
     * The width of the crop area
     */
    width?: number;
}
/**
 * The current value of the image state machine. It starts with `uploaded` and
 *
 * @remarks
 * transitions to `processing` once a worker has picked it up. If all variations and
 * styles of an image have been successfully created, the status becomes `valid`. In
 * case of a problem during the processing it changes to `invalid`.
 *
 */
export declare enum ImageAttributesStatusEnum {
    Invalid = "invalid",
    Processing = "processing",
    Uploaded = "uploaded",
    Valid = "valid"
}
export declare class ImageAttributes extends SpeakeasyBase {
    /**
     * This will be replaced by the relationship `bucket` in a future update.<br/>
     *
     * @remarks
     * The ID of the owning entity
     *
     */
    bucketId?: string;
    /**
     * This will be replaced by the relationship `bucket` in a future update.<br/>
     *
     * @remarks
     * The type of the owning entity
     *
     */
    bucketType?: ImageAttributesBucketTypeEnum;
    createdAt?: Date;
    cropData?: ImageAttributesTheCropAreaWithinTheOriginalMediaAsset;
    /**
     * The current value of the image state machine. It starts with `uploaded` and
     *
     * @remarks
     * transitions to `processing` once a worker has picked it up. If all variations and
     * styles of an image have been successfully created, the status becomes `valid`. In
     * case of a problem during the processing it changes to `invalid`.
     *
     */
    status?: ImageAttributesStatusEnum;
    updatedAt?: Date;
}
export declare class ImageRelationshipsAllMediaAssetsAvailableForThisImage extends SpeakeasyBase {
    data?: ResourceIdentifier[];
}
export declare class ImageRelationships extends SpeakeasyBase {
    mediaAssets?: ImageRelationshipsAllMediaAssetsAvailableForThisImage;
}
export declare class Image extends SpeakeasyBase {
    attributes?: ImageAttributes;
    id?: string;
    relationships?: ImageRelationships;
    /**
     * The type of resource. This is always `images`
     */
    type?: string;
}
