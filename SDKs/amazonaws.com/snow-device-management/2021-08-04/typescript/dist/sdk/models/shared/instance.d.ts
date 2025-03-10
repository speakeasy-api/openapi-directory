import { SpeakeasyBase } from "../../../internal/utils";
import { CpuOptions } from "./cpuoptions";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { InstanceState } from "./instancestate";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
/**
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
 */
export declare class Instance extends SpeakeasyBase {
    amiLaunchIndex?: number;
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    cpuOptions?: CpuOptions;
    createdAt?: Date;
    imageId?: string;
    instanceId?: string;
    instanceType?: string;
    privateIpAddress?: string;
    publicIpAddress?: string;
    rootDeviceName?: string;
    securityGroups?: SecurityGroupIdentifier[];
    /**
     * The description of the current state of an instance.
     */
    state?: InstanceState;
    updatedAt?: Date;
}
