import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";
/**
 * A routing control, which is a simple on/off switch that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow.
 */
export declare class RoutingControl extends SpeakeasyBase {
    controlPanelArn?: string;
    controlPanelName?: string;
    routingControlArn?: string;
    routingControlName?: string;
    routingControlState?: RoutingControlStateEnum;
}
