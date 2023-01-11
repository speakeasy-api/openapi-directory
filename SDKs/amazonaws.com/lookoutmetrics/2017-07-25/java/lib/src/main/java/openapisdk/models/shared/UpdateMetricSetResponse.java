package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMetricSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public UpdateMetricSetResponse withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
}