import { SpeakeasyBase } from "../../../internal/utils";
import { AddOn } from "./addon";
import { InstanceHardware } from "./instancehardware";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
import { InstanceNetworking } from "./instancenetworking";
import { InstanceState } from "./instancestate";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes an instance (a virtual private server).
 */
export declare class Instance extends SpeakeasyBase {
    addOns?: AddOn[];
    arn?: string;
    blueprintId?: string;
    blueprintName?: string;
    bundleId?: string;
    createdAt?: Date;
    hardware?: InstanceHardware;
    ipAddressType?: IpAddressTypeEnum;
    ipv6Addresses?: string[];
    isStaticIp?: boolean;
    location?: ResourceLocation;
    metadataOptions?: InstanceMetadataOptions;
    name?: string;
    networking?: InstanceNetworking;
    privateIpAddress?: string;
    publicIpAddress?: string;
    resourceType?: ResourceTypeEnum;
    sshKeyName?: string;
    state?: InstanceState;
    supportCode?: string;
    tags?: Tag[];
    username?: string;
}
