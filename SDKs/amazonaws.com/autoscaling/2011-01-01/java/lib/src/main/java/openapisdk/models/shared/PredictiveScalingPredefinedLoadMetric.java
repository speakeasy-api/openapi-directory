package openapisdk.models.shared;



/**
 * PredictiveScalingPredefinedLoadMetric
 * <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
**/
public class PredictiveScalingPredefinedLoadMetric {
    public PredefinedLoadMetricTypeEnum predefinedMetricType;
    public PredictiveScalingPredefinedLoadMetric withPredefinedMetricType(PredefinedLoadMetricTypeEnum predefinedMetricType) {
        this.predefinedMetricType = predefinedMetricType;
        return this;
    }
    public String resourceLabel;
    public PredictiveScalingPredefinedLoadMetric withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}