import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum ImageAttributesBucketTypeEnum {
    AdRepAccount = "AdRepAccount",
    Agency = "Agency",
    Network = "Network",
    Series = "Series",
    User = "User"
}
export declare class ImageAttributesTheCropAreaWithinTheOriginalMediaAsset extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare enum ImageAttributesStatusEnum {
    Invalid = "invalid",
    Processing = "processing",
    Uploaded = "uploaded",
    Valid = "valid"
}
export declare class ImageAttributes extends SpeakeasyBase {
    bucketId?: string;
    bucketType?: ImageAttributesBucketTypeEnum;
    createdAt?: Date;
    cropData?: ImageAttributesTheCropAreaWithinTheOriginalMediaAsset;
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
    type?: string;
}
