package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMetricSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricSetArn")
    public String metricSetArn;
    public CreateMetricSetResponse withMetricSetArn(String metricSetArn) {
        this.metricSetArn = metricSetArn;
        return this;
    }
}