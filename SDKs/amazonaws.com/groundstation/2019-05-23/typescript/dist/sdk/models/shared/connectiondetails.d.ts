import { SpeakeasyBase } from "../../../internal/utils";
import { SocketAddress } from "./socketaddress";
/**
 * Egress address of AgentEndpoint with an optional mtu.
 */
export declare class ConnectionDetails extends SpeakeasyBase {
    mtu?: number;
    socketAddress: SocketAddress;
}
