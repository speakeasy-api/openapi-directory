import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPath } from "./networkpath";
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortRange } from "./portrange";
/**
 * Contains the details of a network reachability finding.
 */
export declare class NetworkReachabilityDetails extends SpeakeasyBase {
    networkPath: NetworkPath;
    openPortRange: PortRange;
    protocol: NetworkProtocolEnum;
}
