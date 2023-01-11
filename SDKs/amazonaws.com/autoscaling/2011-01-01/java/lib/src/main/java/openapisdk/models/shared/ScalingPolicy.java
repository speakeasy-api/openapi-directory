package openapisdk.models.shared;



/**
 * ScalingPolicy
 * Describes a scaling policy.
**/
public class ScalingPolicy {
    public String adjustmentType;
    public ScalingPolicy withAdjustmentType(String adjustmentType) {
        this.adjustmentType = adjustmentType;
        return this;
    }
    public Alarm[] alarms;
    public ScalingPolicy withAlarms(Alarm[] alarms) {
        this.alarms = alarms;
        return this;
    }
    public String autoScalingGroupName;
    public ScalingPolicy withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public Long cooldown;
    public ScalingPolicy withCooldown(Long cooldown) {
        this.cooldown = cooldown;
        return this;
    }
    public Boolean enabled;
    public ScalingPolicy withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public Long estimatedInstanceWarmup;
    public ScalingPolicy withEstimatedInstanceWarmup(Long estimatedInstanceWarmup) {
        this.estimatedInstanceWarmup = estimatedInstanceWarmup;
        return this;
    }
    public String metricAggregationType;
    public ScalingPolicy withMetricAggregationType(String metricAggregationType) {
        this.metricAggregationType = metricAggregationType;
        return this;
    }
    public Long minAdjustmentMagnitude;
    public ScalingPolicy withMinAdjustmentMagnitude(Long minAdjustmentMagnitude) {
        this.minAdjustmentMagnitude = minAdjustmentMagnitude;
        return this;
    }
    public Long minAdjustmentStep;
    public ScalingPolicy withMinAdjustmentStep(Long minAdjustmentStep) {
        this.minAdjustmentStep = minAdjustmentStep;
        return this;
    }
    public String policyARN;
    public ScalingPolicy withPolicyArn(String policyARN) {
        this.policyARN = policyARN;
        return this;
    }
    public String policyName;
    public ScalingPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public String policyType;
    public ScalingPolicy withPolicyType(String policyType) {
        this.policyType = policyType;
        return this;
    }
    public PredictiveScalingConfiguration predictiveScalingConfiguration;
    public ScalingPolicy withPredictiveScalingConfiguration(PredictiveScalingConfiguration predictiveScalingConfiguration) {
        this.predictiveScalingConfiguration = predictiveScalingConfiguration;
        return this;
    }
    public Long scalingAdjustment;
    public ScalingPolicy withScalingAdjustment(Long scalingAdjustment) {
        this.scalingAdjustment = scalingAdjustment;
        return this;
    }
    public StepAdjustment[] stepAdjustments;
    public ScalingPolicy withStepAdjustments(StepAdjustment[] stepAdjustments) {
        this.stepAdjustments = stepAdjustments;
        return this;
    }
    public TargetTrackingConfiguration targetTrackingConfiguration;
    public ScalingPolicy withTargetTrackingConfiguration(TargetTrackingConfiguration targetTrackingConfiguration) {
        this.targetTrackingConfiguration = targetTrackingConfiguration;
        return this;
    }
}