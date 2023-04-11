import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { Licensing } from "./licensing";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";
/**
 * Success
 */
export declare class LaunchConfiguration extends SpeakeasyBase {
    copyPrivateIp?: boolean;
    copyTags?: boolean;
    ec2LaunchTemplateID?: string;
    launchDisposition?: LaunchDispositionEnum;
    licensing?: Licensing;
    name?: string;
    sourceServerID?: string;
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
