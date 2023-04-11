import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnassignIpv6AddressesRequest extends SpeakeasyBase {
    ipv6Addresses?: string[];
    ipv6Prefixes?: string[];
    networkInterfaceId: string;
}
