import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { ImagePermissions } from "./imagepermissions";
import { ImageStateChangeReason } from "./imagestatechangereason";
import { ImageStateEnum } from "./imagestateenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceError } from "./resourceerror";
import { VisibilityTypeEnum } from "./visibilitytypeenum";
/**
 * Describes an image.
 */
export declare class Image extends SpeakeasyBase {
    applications?: Application[];
    appstreamAgentVersion?: string;
    arn?: string;
    baseImageArn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    imageBuilderName?: string;
    imageBuilderSupported?: boolean;
    imageErrors?: ResourceError[];
    imagePermissions?: ImagePermissions;
    name: string;
    platform?: PlatformTypeEnum;
    publicBaseImageReleasedDate?: Date;
    state?: ImageStateEnum;
    stateChangeReason?: ImageStateChangeReason;
    visibility?: VisibilityTypeEnum;
}
