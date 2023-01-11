package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PredefinedMetricSpecification
 * <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
public class PredefinedMetricSpecification {
    @JsonProperty("PredefinedMetricType")
    public MetricTypeEnum predefinedMetricType;
    public PredefinedMetricSpecification withPredefinedMetricType(MetricTypeEnum predefinedMetricType) {
        this.predefinedMetricType = predefinedMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceLabel")
    public String resourceLabel;
    public PredefinedMetricSpecification withResourceLabel(String resourceLabel) {
        this.resourceLabel = resourceLabel;
        return this;
    }
}