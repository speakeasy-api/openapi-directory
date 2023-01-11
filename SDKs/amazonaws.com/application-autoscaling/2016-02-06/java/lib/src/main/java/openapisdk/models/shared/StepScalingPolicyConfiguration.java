package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StepScalingPolicyConfiguration
 * Represents a step scaling policy configuration to use with Application Auto Scaling.
**/
public class StepScalingPolicyConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdjustmentType")
    public AdjustmentTypeEnum adjustmentType;
    public StepScalingPolicyConfiguration withAdjustmentType(AdjustmentTypeEnum adjustmentType) {
        this.adjustmentType = adjustmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cooldown")
    public Long cooldown;
    public StepScalingPolicyConfiguration withCooldown(Long cooldown) {
        this.cooldown = cooldown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricAggregationType")
    public MetricAggregationTypeEnum metricAggregationType;
    public StepScalingPolicyConfiguration withMetricAggregationType(MetricAggregationTypeEnum metricAggregationType) {
        this.metricAggregationType = metricAggregationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinAdjustmentMagnitude")
    public Long minAdjustmentMagnitude;
    public StepScalingPolicyConfiguration withMinAdjustmentMagnitude(Long minAdjustmentMagnitude) {
        this.minAdjustmentMagnitude = minAdjustmentMagnitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StepAdjustments")
    public StepAdjustment[] stepAdjustments;
    public StepScalingPolicyConfiguration withStepAdjustments(StepAdjustment[] stepAdjustments) {
        this.stepAdjustments = stepAdjustments;
        return this;
    }
}