package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricPolicy
 * <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>
**/
public class MetricPolicy {
    @JsonProperty("ContainerLevelMetrics")
    public ContainerLevelMetricsEnum containerLevelMetrics;
    public MetricPolicy withContainerLevelMetrics(ContainerLevelMetricsEnum containerLevelMetrics) {
        this.containerLevelMetrics = containerLevelMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricPolicyRules")
    public MetricPolicyRule[] metricPolicyRules;
    public MetricPolicy withMetricPolicyRules(MetricPolicyRule[] metricPolicyRules) {
        this.metricPolicyRules = metricPolicyRules;
        return this;
    }
}