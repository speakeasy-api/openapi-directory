package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomizedScalingMetricSpecification
 * <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
**/
public class CustomizedScalingMetricSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public MetricDimension[] dimensions;
    public CustomizedScalingMetricSpecification withDimensions(MetricDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CustomizedScalingMetricSpecification withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Namespace")
    public String namespace;
    public CustomizedScalingMetricSpecification withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("Statistic")
    public MetricStatisticEnum statistic;
    public CustomizedScalingMetricSpecification withStatistic(MetricStatisticEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public String unit;
    public CustomizedScalingMetricSpecification withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}