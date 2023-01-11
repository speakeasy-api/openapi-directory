package openapisdk.models.shared;



/**
 * PredefinedMetricSpecification
 * Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
**/
public class PredefinedMetricSpecification {
    public MetricTypeEnum predefinedMetricType;
    public PredefinedMetricSpecification withPredefinedMetricType(MetricTypeEnum predefinedMetricType) {
        this.predefinedMetricType = predefinedMetricType;
        return this;
    }
    public String resourceLabel;
    public PredefinedMetricSpecification withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}