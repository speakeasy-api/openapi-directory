import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for UnassignPrivateIpAddresses.
 */
export declare class UnassignPrivateIpAddressesRequest extends SpeakeasyBase {
    ipv4Prefixes?: string[];
    networkInterfaceId: string;
    privateIpAddresses?: string[];
}
