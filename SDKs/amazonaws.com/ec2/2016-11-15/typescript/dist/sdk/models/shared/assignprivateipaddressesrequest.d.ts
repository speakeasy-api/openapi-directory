import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for AssignPrivateIpAddresses.
 */
export declare class AssignPrivateIpAddressesRequest extends SpeakeasyBase {
    allowReassignment?: boolean;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: string[];
    networkInterfaceId: string;
    privateIpAddresses?: string[];
    secondaryPrivateIpAddressCount?: number;
}
