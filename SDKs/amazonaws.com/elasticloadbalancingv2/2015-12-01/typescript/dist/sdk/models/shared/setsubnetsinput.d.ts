import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { SubnetMapping } from "./subnetmapping";
export declare class SetSubnetsInput extends SpeakeasyBase {
    ipAddressType?: IpAddressTypeEnum;
    loadBalancerArn: string;
    subnetMappings?: SubnetMapping[];
    subnets?: string[];
}
