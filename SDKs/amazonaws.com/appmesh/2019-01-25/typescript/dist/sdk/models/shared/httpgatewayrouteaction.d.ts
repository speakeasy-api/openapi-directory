import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteTarget } from "./gatewayroutetarget";
import { HttpGatewayRouteRewrite } from "./httpgatewayrouterewrite";
/**
 * An object that represents the action to take if a match is determined.
 */
export declare class HttpGatewayRouteAction extends SpeakeasyBase {
    rewrite?: HttpGatewayRouteRewrite;
    target: GatewayRouteTarget;
}
