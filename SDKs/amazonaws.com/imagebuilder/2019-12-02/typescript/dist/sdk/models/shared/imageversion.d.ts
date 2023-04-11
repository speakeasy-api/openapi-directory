import { SpeakeasyBase } from "../../../internal/utils";
import { BuildTypeEnum } from "./buildtypeenum";
import { ImageSourceEnum } from "./imagesourceenum";
import { ImageTypeEnum } from "./imagetypeenum";
import { PlatformEnum } from "./platformenum";
/**
 * The defining characteristics of a specific version of an Image Builder image.
 */
export declare class ImageVersion extends SpeakeasyBase {
    arn?: string;
    buildType?: BuildTypeEnum;
    dateCreated?: string;
    imageSource?: ImageSourceEnum;
    name?: string;
    osVersion?: string;
    owner?: string;
    platform?: PlatformEnum;
    type?: ImageTypeEnum;
    version?: string;
}
