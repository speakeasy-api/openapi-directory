import { SpeakeasyBase } from "../../../internal/utils";
import { BootModeEnum } from "./bootmodeenum";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { Licensing } from "./licensing";
import { PostLaunchActions } from "./postlaunchactions";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";
/**
 * Success
 */
export declare class LaunchConfiguration extends SpeakeasyBase {
    bootMode?: BootModeEnum;
    copyPrivateIp?: boolean;
    copyTags?: boolean;
    ec2LaunchTemplateID?: string;
    enableMapAutoTagging?: boolean;
    launchDisposition?: LaunchDispositionEnum;
    licensing?: Licensing;
    mapAutoTaggingMpeID?: string;
    name?: string;
    /**
     * Post Launch Actions to executed on the Test or Cutover instance.
     */
    postLaunchActions?: PostLaunchActions;
    sourceServerID?: string;
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
