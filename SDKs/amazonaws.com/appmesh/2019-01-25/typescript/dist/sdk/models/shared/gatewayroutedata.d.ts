import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteSpec } from "./gatewayroutespec";
import { GatewayRouteStatus } from "./gatewayroutestatus";
import { ResourceMetadata } from "./resourcemetadata";
/**
 * An object that represents a gateway route returned by a describe operation.
 */
export declare class GatewayRouteData extends SpeakeasyBase {
    gatewayRouteName: string;
    meshName: string;
    /**
     * An object that represents metadata for a resource.
     */
    metadata: ResourceMetadata;
    spec: GatewayRouteSpec;
    status: GatewayRouteStatus;
    virtualGatewayName: string;
}
