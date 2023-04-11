import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv4 prefix.
 */
export declare class AssignPrivateIpAddressesResultAssignedIpv4Prefixes extends SpeakeasyBase {
    ipv4Prefix?: string;
}
/**
 * Describes the private IP addresses assigned to a network interface.
 */
export declare class AssignPrivateIpAddressesResultAssignedPrivateIpAddresses extends SpeakeasyBase {
    privateIpAddress?: string;
}
/**
 * Success
 */
export declare class AssignPrivateIpAddressesResult extends SpeakeasyBase {
    assignedIpv4Prefixes?: AssignPrivateIpAddressesResultAssignedIpv4Prefixes[];
    assignedPrivateIpAddresses?: AssignPrivateIpAddressesResultAssignedPrivateIpAddresses[];
    networkInterfaceId?: string;
}
