package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomMetricResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricArn")
    public String metricArn;
    public CreateCustomMetricResponse withMetricArn(String metricArn) {
        this.metricArn = metricArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public CreateCustomMetricResponse withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}