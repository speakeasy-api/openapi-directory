import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthReasonEnum } from "./instancehealthreasonenum";
import { InstanceHealthStateEnum } from "./instancehealthstateenum";
/**
 * Describes information about the health of the instance.
 */
export declare class InstanceHealthSummary extends SpeakeasyBase {
    instanceHealth?: InstanceHealthStateEnum;
    instanceHealthReason?: InstanceHealthReasonEnum;
    instanceName?: string;
}
