import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySize } from "./capacitysize";
import { TrafficRoutingConfigTypeEnum } from "./trafficroutingconfigtypeenum";
/**
 * Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet.
 */
export declare class TrafficRoutingConfig extends SpeakeasyBase {
    canarySize?: CapacitySize;
    linearStepSize?: CapacitySize;
    type: TrafficRoutingConfigTypeEnum;
    waitIntervalInSeconds: number;
}
