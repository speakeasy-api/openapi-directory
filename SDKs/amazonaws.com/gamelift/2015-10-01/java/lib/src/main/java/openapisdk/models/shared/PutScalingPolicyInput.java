package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutScalingPolicyInput
 * Represents the input for a request operation.
**/
public class PutScalingPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorTypeEnum comparisonOperator;
    public PutScalingPolicyInput withComparisonOperator(ComparisonOperatorTypeEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationPeriods")
    public Long evaluationPeriods;
    public PutScalingPolicyInput withEvaluationPeriods(Long evaluationPeriods) {
        this.evaluationPeriods = evaluationPeriods;
        return this;
    }
    @JsonProperty("FleetId")
    public String fleetId;
    public PutScalingPolicyInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("MetricName")
    public MetricNameEnum metricName;
    public PutScalingPolicyInput withMetricName(MetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public PutScalingPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public PolicyTypeEnum policyType;
    public PutScalingPolicyInput withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingAdjustment")
    public Long scalingAdjustment;
    public PutScalingPolicyInput withScalingAdjustment(Long scalingAdjustment) {
        this.scalingAdjustment = scalingAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingAdjustmentType")
    public ScalingAdjustmentTypeEnum scalingAdjustmentType;
    public PutScalingPolicyInput withScalingAdjustmentType(ScalingAdjustmentTypeEnum scalingAdjustmentType) {
        this.scalingAdjustmentType = scalingAdjustmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetConfiguration")
    public TargetConfiguration targetConfiguration;
    public PutScalingPolicyInput withTargetConfiguration(TargetConfiguration targetConfiguration) {
        this.targetConfiguration = targetConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Threshold")
    public Double threshold;
    public PutScalingPolicyInput withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
}