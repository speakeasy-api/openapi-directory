import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { LoadBalancerSchemeEnumEnum } from "./loadbalancerschemeenumenum";
import { LoadBalancerTypeEnumEnum } from "./loadbalancertypeenumenum";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";
export declare class CreateLoadBalancerInput extends SpeakeasyBase {
    customerOwnedIpv4Pool?: string;
    ipAddressType?: IpAddressTypeEnum;
    name: string;
    scheme?: LoadBalancerSchemeEnumEnum;
    securityGroups?: string[];
    subnetMappings?: SubnetMapping[];
    subnets?: string[];
    tags?: Tag[];
    type?: LoadBalancerTypeEnumEnum;
}
