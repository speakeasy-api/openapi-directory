package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeMetricSetRequestBody {
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public DescribeMetricSetRequestBody withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
}