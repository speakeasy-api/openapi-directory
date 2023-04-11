import { SpeakeasyBase } from "../../../internal/utils";
import { BootModeEnum } from "./bootmodeenum";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { LaunchTemplateDiskConf } from "./launchtemplatediskconf";
import { Licensing } from "./licensing";
import { PostLaunchActions } from "./postlaunchactions";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";
/**
 * Success
 */
export declare class LaunchConfigurationTemplate extends SpeakeasyBase {
    arn?: string;
    associatePublicIpAddress?: boolean;
    bootMode?: BootModeEnum;
    copyPrivateIp?: boolean;
    copyTags?: boolean;
    ec2LaunchTemplateID?: string;
    enableMapAutoTagging?: boolean;
    largeVolumeConf?: LaunchTemplateDiskConf;
    launchConfigurationTemplateID: string;
    launchDisposition?: LaunchDispositionEnum;
    /**
     * Configure Licensing.
     */
    licensing?: Licensing;
    mapAutoTaggingMpeID?: string;
    postLaunchActions?: PostLaunchActions;
    smallVolumeConf?: LaunchTemplateDiskConf;
    smallVolumeMaxSize?: number;
    tags?: Record<string, string>;
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
