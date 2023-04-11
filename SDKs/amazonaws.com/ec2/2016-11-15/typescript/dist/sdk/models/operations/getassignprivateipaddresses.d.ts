import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}
export declare enum GETAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssignPrivateIpAddressesRequest extends SpeakeasyBase {
    action: GETAssignPrivateIpAddressesActionEnum;
    /**
     * Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.
     */
    allowReassignment?: boolean;
    /**
     * One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.
     */
    ipv4Prefix?: string[];
    /**
     * The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.
     */
    ipv4PrefixCount?: number;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    /**
     * <p>The IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p> <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
     */
    privateIpAddress?: string[];
    /**
     * The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.
     */
    secondaryPrivateIpAddressCount?: number;
    version: GETAssignPrivateIpAddressesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssignPrivateIpAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
