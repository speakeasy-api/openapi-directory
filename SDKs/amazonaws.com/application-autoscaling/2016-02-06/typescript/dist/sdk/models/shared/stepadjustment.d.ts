import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of <code>0</code> and an upper bound of <code>10</code>.</p> </li> <li> <p>To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of <code>-10</code> and an upper bound of <code>0</code>.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>
 */
export declare class StepAdjustment extends SpeakeasyBase {
    metricIntervalLowerBound?: number;
    metricIntervalUpperBound?: number;
    scalingAdjustment: number;
}
