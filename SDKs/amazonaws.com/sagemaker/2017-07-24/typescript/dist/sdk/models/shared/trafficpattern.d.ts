import { SpeakeasyBase } from "../../../internal/utils";
import { Phase } from "./phase";
import { TrafficTypeEnum } from "./traffictypeenum";
/**
 * Defines the traffic pattern of the load test.
 */
export declare class TrafficPattern extends SpeakeasyBase {
    phases?: Phase[];
    trafficType?: TrafficTypeEnum;
}
