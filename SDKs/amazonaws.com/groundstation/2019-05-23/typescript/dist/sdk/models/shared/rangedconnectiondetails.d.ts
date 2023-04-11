import { SpeakeasyBase } from "../../../internal/utils";
import { RangedSocketAddress } from "./rangedsocketaddress";
/**
 * Ingress address of AgentEndpoint with a port range and an optional mtu.
 */
export declare class RangedConnectionDetails extends SpeakeasyBase {
    mtu?: number;
    socketAddress: RangedSocketAddress;
}
