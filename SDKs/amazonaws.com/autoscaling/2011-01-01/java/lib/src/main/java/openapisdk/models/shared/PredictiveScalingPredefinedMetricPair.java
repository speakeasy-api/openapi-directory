package openapisdk.models.shared;



/**
 * PredictiveScalingPredefinedMetricPair
 * Represents a metric pair for a predictive scaling policy. 
**/
public class PredictiveScalingPredefinedMetricPair {
    public PredefinedMetricPairTypeEnum predefinedMetricType;
    public PredictiveScalingPredefinedMetricPair withPredefinedMetricType(PredefinedMetricPairTypeEnum predefinedMetricType) {
        this.predefinedMetricType = predefinedMetricType;
        return this;
    }
    public String resourceLabel;
    public PredictiveScalingPredefinedMetricPair withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}