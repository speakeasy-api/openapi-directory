import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingControl } from "./routingcontrol";
/**
 * Success
 */
export declare class ListRoutingControlsResponse extends SpeakeasyBase {
    nextToken?: string;
    routingControls?: RoutingControl[];
}
