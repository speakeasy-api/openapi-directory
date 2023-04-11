import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}
export declare enum GETAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssignIpv6AddressesRequest extends SpeakeasyBase {
    action: GETAssignIpv6AddressesActionEnum;
    /**
     * The number of additional IPv6 addresses to assign to the network interface. The specified number of IPv6 addresses are assigned in addition to the existing IPv6 addresses that are already assigned to the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
     */
    ipv6AddressCount?: number;
    /**
     * The IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.
     */
    ipv6Addresses?: string[];
    /**
     * One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.
     */
    ipv6Prefix?: string[];
    /**
     * The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code> option.
     */
    ipv6PrefixCount?: number;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    version: GETAssignIpv6AddressesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
