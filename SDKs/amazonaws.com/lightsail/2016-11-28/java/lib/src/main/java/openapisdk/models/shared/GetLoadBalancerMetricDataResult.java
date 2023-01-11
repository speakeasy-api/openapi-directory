package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancerMetricDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricData")
    public MetricDatapoint[] metricData;
    public GetLoadBalancerMetricDataResult withMetricData(MetricDatapoint[] metricData) {
        this.metricData = metricData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public LoadBalancerMetricNameEnum metricName;
    public GetLoadBalancerMetricDataResult withMetricName(LoadBalancerMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
}