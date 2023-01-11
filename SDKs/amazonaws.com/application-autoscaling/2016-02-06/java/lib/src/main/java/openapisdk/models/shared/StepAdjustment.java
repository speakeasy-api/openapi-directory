package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StepAdjustment
 * <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>
**/
public class StepAdjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricIntervalLowerBound")
    public Double metricIntervalLowerBound;
    public StepAdjustment withMetricIntervalLowerBound(Double metricIntervalLowerBound) {
        this.metricIntervalLowerBound = metricIntervalLowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricIntervalUpperBound")
    public Double metricIntervalUpperBound;
    public StepAdjustment withMetricIntervalUpperBound(Double metricIntervalUpperBound) {
        this.metricIntervalUpperBound = metricIntervalUpperBound;
        return this;
    }
    @JsonProperty("ScalingAdjustment")
    public Long scalingAdjustment;
    public StepAdjustment withScalingAdjustment(Long scalingAdjustment) {
        this.scalingAdjustment = scalingAdjustment;
        return this;
    }
}