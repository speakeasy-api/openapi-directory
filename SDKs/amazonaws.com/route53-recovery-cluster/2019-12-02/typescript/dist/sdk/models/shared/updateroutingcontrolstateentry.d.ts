import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";
/**
 * A routing control state entry.
 */
export declare class UpdateRoutingControlStateEntry extends SpeakeasyBase {
    routingControlArn: string;
    routingControlState: RoutingControlStateEnum;
}
