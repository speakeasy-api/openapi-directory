import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationProtocolEnum } from "./applicationprotocolenum";
import { TransportProtocolEnum } from "./transportprotocolenum";
/**
 * <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, specify the exposed ports using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <note> <p>You can't expose the same container port for multiple protocols. If you attempt this, an error is returned.</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
 */
export declare class PortMapping extends SpeakeasyBase {
    appProtocol?: ApplicationProtocolEnum;
    containerPort?: number;
    containerPortRange?: string;
    hostPort?: number;
    name?: string;
    protocol?: TransportProtocolEnum;
}
