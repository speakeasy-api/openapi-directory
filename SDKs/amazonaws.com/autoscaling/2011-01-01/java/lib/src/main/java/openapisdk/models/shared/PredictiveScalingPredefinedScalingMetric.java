package openapisdk.models.shared;



/**
 * PredictiveScalingPredefinedScalingMetric
 * <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
**/
public class PredictiveScalingPredefinedScalingMetric {
    public PredefinedScalingMetricTypeEnum predefinedMetricType;
    public PredictiveScalingPredefinedScalingMetric withPredefinedMetricType(PredefinedScalingMetricTypeEnum predefinedMetricType) {
        this.predefinedMetricType = predefinedMetricType;
        return this;
    }
    public String resourceLabel;
    public PredictiveScalingPredefinedScalingMetric withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}