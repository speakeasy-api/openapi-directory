package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFleetMetricResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricArn")
    public String metricArn;
    public CreateFleetMetricResponse withMetricArn(String metricArn) {
        this.metricArn = metricArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public CreateFleetMetricResponse withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}