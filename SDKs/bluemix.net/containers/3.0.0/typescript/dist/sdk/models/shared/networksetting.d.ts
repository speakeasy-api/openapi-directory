import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
export declare class NetworkSetting extends SpeakeasyBase {
    /**
     * The name of the private network bridge.
     */
    bridge?: string;
    /**
     * The IP address of the private network gateway in IPv4 format.
     */
    gateway?: string;
    /**
     * The private IP address that is assigned to the container.
     */
    ipAddress: string;
    ipPrefixLen?: number;
    /**
     * The MAC address that was assigned to the container.
     */
    macAddress?: string;
    network?: Network;
    /**
     * Specific to Docker. List of private container ports and their mapping to the host ports. In IBM Containers all container ports are exposed on the host by default. This attribute is returned as an empty list.
     */
    portMapping?: string;
    /**
     * All ports of the container that were exposed to the public.
     */
    ports?: string[];
    /**
     * The Public IP address that was bound to the container.
     */
    publicIpAddress: string;
}
