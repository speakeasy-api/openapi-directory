package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PublishMetricsRequestBody {
    @JsonProperty("MetricData")
    public openapisdk.models.shared.MetricDatum[] metricData;
    public PublishMetricsRequestBody withMetricData(openapisdk.models.shared.MetricDatum[] metricData) {
        this.metricData = metricData;
        return this;
    }
}