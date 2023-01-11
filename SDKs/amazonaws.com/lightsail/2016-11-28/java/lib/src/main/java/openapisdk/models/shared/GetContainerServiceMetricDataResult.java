package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerServiceMetricDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricData")
    public MetricDatapoint[] metricData;
    public GetContainerServiceMetricDataResult withMetricData(MetricDatapoint[] metricData) {
        this.metricData = metricData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public ContainerServiceMetricNameEnum metricName;
    public GetContainerServiceMetricDataResult withMetricName(ContainerServiceMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
}