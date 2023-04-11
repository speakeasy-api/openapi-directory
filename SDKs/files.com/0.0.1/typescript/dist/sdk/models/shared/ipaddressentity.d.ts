import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List IP Addresses associated with the current site
 */
export declare class IpAddressEntity extends SpeakeasyBase {
    /**
     * The object that this public IP address list is associated with.
     */
    associatedWith?: string;
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Unique label for list; used by Zapier and other integrations.
     */
    id?: string;
    /**
     * A list of IP addresses.
     */
    ipAddresses?: string[];
}
