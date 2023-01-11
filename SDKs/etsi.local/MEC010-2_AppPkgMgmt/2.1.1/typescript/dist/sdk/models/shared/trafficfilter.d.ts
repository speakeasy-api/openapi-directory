import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrafficFilter extends SpeakeasyBase {
    dSCP?: number;
    dstAddress?: string[];
    dstPort?: string[];
    dstTunnelPort?: string[];
    protocol?: string[];
    qCI?: number;
    srcAddress?: string[];
    srcPort?: string[];
    srcTunnelAddress?: string[];
    srcTunnelPort?: string[];
    tC?: number;
    tag?: string[];
    tgtTunnelAddress?: string[];
}
