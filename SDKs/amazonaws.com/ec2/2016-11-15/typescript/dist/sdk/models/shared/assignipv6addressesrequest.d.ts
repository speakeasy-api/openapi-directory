import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignIpv6AddressesRequest extends SpeakeasyBase {
    ipv6AddressCount?: number;
    ipv6Addresses?: string[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: string[];
    networkInterfaceId: string;
}
