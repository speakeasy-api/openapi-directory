import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";
/**
 * Success
 */
export declare class GetRoutingControlStateResponse extends SpeakeasyBase {
    routingControlArn: string;
    routingControlName?: string;
    routingControlState: RoutingControlStateEnum;
}
