package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetTrackingScalingPolicyConfiguration
 * Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
**/
public class TargetTrackingScalingPolicyConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomizedMetricSpecification")
    public CustomizedMetricSpecification customizedMetricSpecification;
    public TargetTrackingScalingPolicyConfiguration withCustomizedMetricSpecification(CustomizedMetricSpecification customizedMetricSpecification) {
        this.customizedMetricSpecification = customizedMetricSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableScaleIn")
    public Boolean disableScaleIn;
    public TargetTrackingScalingPolicyConfiguration withDisableScaleIn(Boolean disableScaleIn) {
        this.disableScaleIn = disableScaleIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredefinedMetricSpecification")
    public PredefinedMetricSpecification predefinedMetricSpecification;
    public TargetTrackingScalingPolicyConfiguration withPredefinedMetricSpecification(PredefinedMetricSpecification predefinedMetricSpecification) {
        this.predefinedMetricSpecification = predefinedMetricSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScaleInCooldown")
    public Long scaleInCooldown;
    public TargetTrackingScalingPolicyConfiguration withScaleInCooldown(Long scaleInCooldown) {
        this.scaleInCooldown = scaleInCooldown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScaleOutCooldown")
    public Long scaleOutCooldown;
    public TargetTrackingScalingPolicyConfiguration withScaleOutCooldown(Long scaleOutCooldown) {
        this.scaleOutCooldown = scaleOutCooldown;
        return this;
    }
    @JsonProperty("TargetValue")
    public Double targetValue;
    public TargetTrackingScalingPolicyConfiguration withTargetValue(Double targetValue) {
        this.targetValue = targetValue;
        return this;
    }
}