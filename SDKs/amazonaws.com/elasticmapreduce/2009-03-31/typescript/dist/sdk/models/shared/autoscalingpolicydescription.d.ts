import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStatus } from "./autoscalingpolicystatus";
import { ScalingConstraints } from "./scalingconstraints";
import { ScalingRule } from "./scalingrule";
/**
 * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
 */
export declare class AutoScalingPolicyDescription extends SpeakeasyBase {
    constraints?: ScalingConstraints;
    rules?: ScalingRule[];
    status?: AutoScalingPolicyStatus;
}
