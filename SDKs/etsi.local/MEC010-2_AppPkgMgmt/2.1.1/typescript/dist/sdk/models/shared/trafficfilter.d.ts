import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrafficFilter extends SpeakeasyBase {
    /**
     * Used to match all IPv4 packets that have the same DSCP.
     */
    dSCP?: number;
    /**
     * A IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.
     */
    dstAddress?: string[];
    /**
     * A port or a range of ports.
     */
    dstPort?: string[];
    /**
     * Used for GTP tunnel based traffic rule.
     */
    dstTunnelPort?: string[];
    /**
     * Specify the protocol of the traffic filter.
     */
    protocol?: string[];
    /**
     * Used to match all packets that have the same QCI.
     */
    qCI?: number;
    /**
     * An IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.
     */
    srcAddress?: string[];
    /**
     * A port or a range of ports.
     */
    srcPort?: string[];
    /**
     * Used for GTP tunnel based traffic rule.
     */
    srcTunnelAddress?: string[];
    /**
     * Used for GTP tunnel based traffic rule.
     */
    srcTunnelPort?: string[];
    /**
     * Used to match all IPv6 packets that have the same TC.
     */
    tC?: number;
    /**
     * Used for tag based traffic rule.
     */
    tag?: string[];
    /**
     * Used for GTP tunnel based traffic rule.
     */
    tgtTunnelAddress?: string[];
}
