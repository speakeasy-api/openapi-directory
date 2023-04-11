import { SpeakeasyBase } from "../../../internal/utils";
import { EbsVolume } from "./ebsvolume";
import { InstanceStatus } from "./instancestatus";
import { MarketTypeEnum } from "./markettypeenum";
/**
 * Represents an EC2 instance provisioned as part of cluster.
 */
export declare class Instance extends SpeakeasyBase {
    ebsVolumes?: EbsVolume[];
    ec2InstanceId?: string;
    id?: string;
    instanceFleetId?: string;
    instanceGroupId?: string;
    instanceType?: string;
    market?: MarketTypeEnum;
    privateDnsName?: string;
    privateIpAddress?: string;
    publicDnsName?: string;
    publicIpAddress?: string;
    status?: InstanceStatus;
}
