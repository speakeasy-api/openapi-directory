package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FleetMetricNameAndArn
 * The name and ARN of a fleet metric.
**/
public class FleetMetricNameAndArn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricArn")
    public String metricArn;
    public FleetMetricNameAndArn withMetricArn(String metricArn) {
        this.metricArn = metricArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public FleetMetricNameAndArn withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}