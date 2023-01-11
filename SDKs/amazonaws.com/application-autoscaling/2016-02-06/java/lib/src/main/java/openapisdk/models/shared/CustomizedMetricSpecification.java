package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomizedMetricSpecification
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p>
**/
public class CustomizedMetricSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public MetricDimension[] dimensions;
    public CustomizedMetricSpecification withDimensions(MetricDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CustomizedMetricSpecification withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Namespace")
    public String namespace;
    public CustomizedMetricSpecification withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("Statistic")
    public MetricStatisticEnum statistic;
    public CustomizedMetricSpecification withStatistic(MetricStatisticEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public String unit;
    public CustomizedMetricSpecification withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}