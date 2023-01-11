package openapisdk.models.shared;



/**
 * TargetTrackingConfiguration
 * Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
**/
public class TargetTrackingConfiguration {
    public CustomizedMetricSpecification customizedMetricSpecification;
    public TargetTrackingConfiguration withCustomizedMetricSpecification(CustomizedMetricSpecification customizedMetricSpecification) {
        this.customizedMetricSpecification = customizedMetricSpecification;
        return this;
    }
    public Boolean disableScaleIn;
    public TargetTrackingConfiguration withDisableScaleIn(Boolean disableScaleIn) {
        this.disableScaleIn = disableScaleIn;
        return this;
    }
    public PredefinedMetricSpecification predefinedMetricSpecification;
    public TargetTrackingConfiguration withPredefinedMetricSpecification(PredefinedMetricSpecification predefinedMetricSpecification) {
        this.predefinedMetricSpecification = predefinedMetricSpecification;
        return this;
    }
    public Double targetValue;
    public TargetTrackingConfiguration withTargetValue(Double targetValue) {
        this.targetValue = targetValue;
        return this;
    }
}