import { SpeakeasyBase } from "../../../internal/utils";
import { TransportProtocolEnum } from "./transportprotocolenum";
/**
 * Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
 */
export declare class NetworkBinding extends SpeakeasyBase {
    bindIP?: string;
    containerPort?: number;
    containerPortRange?: string;
    hostPort?: number;
    hostPortRange?: string;
    protocol?: TransportProtocolEnum;
}
