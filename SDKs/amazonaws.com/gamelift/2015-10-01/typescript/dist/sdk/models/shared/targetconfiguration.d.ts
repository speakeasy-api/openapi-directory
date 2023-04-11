import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
 */
export declare class TargetConfiguration extends SpeakeasyBase {
    targetValue: number;
}
