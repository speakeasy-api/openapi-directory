import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateVpcCidrBlockRequest extends SpeakeasyBase {
    amazonProvidedIpv6CidrBlock?: boolean;
    cidrBlock?: string;
    ipv4IpamPoolId?: string;
    ipv4NetmaskLength?: number;
    ipv6CidrBlock?: string;
    ipv6CidrBlockNetworkBorderGroup?: string;
    ipv6IpamPoolId?: string;
    ipv6NetmaskLength?: number;
    ipv6Pool?: string;
    vpcId: string;
}
