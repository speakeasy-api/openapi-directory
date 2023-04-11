import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { ListenerTimeout } from "./listenertimeout";
import { ListenerTls } from "./listenertls";
import { OutlierDetection } from "./outlierdetection";
import { PortMapping } from "./portmapping";
import { VirtualNodeConnectionPool } from "./virtualnodeconnectionpool";
/**
 * An object that represents a listener for a virtual node.
 */
export declare class Listener extends SpeakeasyBase {
    connectionPool?: VirtualNodeConnectionPool;
    healthCheck?: HealthCheckPolicy;
    outlierDetection?: OutlierDetection;
    portMapping: PortMapping;
    timeout?: ListenerTimeout;
    tls?: ListenerTls;
}
