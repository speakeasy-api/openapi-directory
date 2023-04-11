import { SpeakeasyBase } from "../../../internal/utils";
export declare class Network extends SpeakeasyBase {
    /**
     * Alternative name of the private container network the container is connected to.
     */
    aliases?: string;
    /**
     * Unique ID representing a container.
     */
    endpointID?: string;
    /**
     * The private IP address of the network gateway in IPv4 format.
     */
    gateway?: string;
    /**
     * Private IP address of the container in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty.
     */
    globalIPv6Address?: string;
    /**
     * Not supported by IBM Containers, empty string.
     */
    globalIPv6PrefixLen?: number;
    /**
     * Specific configurations for the network driver.
     */
    ipamConfig?: string;
    /**
     * The prefix of the subnet in the private container network. The prefix indicates that 16 bits out of 32 bits are used to address the network. As every IPv4 IP adress consists of 32 bits, the last 16 bits are used to assign private IP addresses to the container.
     */
    ipPrefixLen?: string;
    /**
     * The private IP address of the network gateway in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty.
     */
    iPv6Gateway?: string;
    /**
     * List of container names that are linked to the container.
     */
    links?: string;
    /**
     * The MAC address that is assigned to the container.
     */
    macAddress?: string;
    /**
     * Unique identifier representing the private container network.
     */
    networkID?: string;
}
