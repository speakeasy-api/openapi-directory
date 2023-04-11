import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayConnectionPool } from "./virtualgatewayconnectionpool";
import { VirtualGatewayHealthCheckPolicy } from "./virtualgatewayhealthcheckpolicy";
import { VirtualGatewayListenerTls } from "./virtualgatewaylistenertls";
import { VirtualGatewayPortMapping } from "./virtualgatewayportmapping";
/**
 * An object that represents a listener for a virtual gateway.
 */
export declare class VirtualGatewayListener extends SpeakeasyBase {
    connectionPool?: VirtualGatewayConnectionPool;
    healthCheck?: VirtualGatewayHealthCheckPolicy;
    portMapping: VirtualGatewayPortMapping;
    tls?: VirtualGatewayListenerTls;
}
