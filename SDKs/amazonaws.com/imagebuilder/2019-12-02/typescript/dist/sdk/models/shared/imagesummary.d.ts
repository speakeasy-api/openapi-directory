import { SpeakeasyBase } from "../../../internal/utils";
import { BuildTypeEnum } from "./buildtypeenum";
import { ImageSourceEnum } from "./imagesourceenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
/**
 * An image summary.
 */
export declare class ImageSummary extends SpeakeasyBase {
    arn?: string;
    buildType?: BuildTypeEnum;
    dateCreated?: string;
    imageSource?: ImageSourceEnum;
    name?: string;
    osVersion?: string;
    outputResources?: OutputResources;
    owner?: string;
    platform?: PlatformEnum;
    state?: ImageState;
    tags?: Record<string, string>;
    type?: ImageTypeEnum;
    version?: string;
}
