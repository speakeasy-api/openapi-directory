import { SpeakeasyBase } from "../../../internal/utils";
import { DnsOptionsSpecification } from "./dnsoptionsspecification";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class ModifyVpcEndpointRequest extends SpeakeasyBase {
    addRouteTableIds?: string[];
    addSecurityGroupIds?: string[];
    addSubnetIds?: string[];
    dnsOptions?: DnsOptionsSpecification;
    dryRun?: boolean;
    ipAddressType?: IpAddressTypeEnum;
    policyDocument?: string;
    privateDnsEnabled?: boolean;
    removeRouteTableIds?: string[];
    removeSecurityGroupIds?: string[];
    removeSubnetIds?: string[];
    resetPolicy?: boolean;
    vpcEndpointId: string;
}
