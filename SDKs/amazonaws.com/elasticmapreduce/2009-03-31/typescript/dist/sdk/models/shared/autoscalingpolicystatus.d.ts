import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStateChangeReason } from "./autoscalingpolicystatechangereason";
import { AutoScalingPolicyStateEnum } from "./autoscalingpolicystateenum";
/**
 * The status of an automatic scaling policy.
 */
export declare class AutoScalingPolicyStatus extends SpeakeasyBase {
    state?: AutoScalingPolicyStateEnum;
    stateChangeReason?: AutoScalingPolicyStateChangeReason;
}
