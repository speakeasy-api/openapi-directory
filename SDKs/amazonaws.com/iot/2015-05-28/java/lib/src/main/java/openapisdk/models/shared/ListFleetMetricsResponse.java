package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFleetMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetMetrics")
    public FleetMetricNameAndArn[] fleetMetrics;
    public ListFleetMetricsResponse withFleetMetrics(FleetMetricNameAndArn[] fleetMetrics) {
        this.fleetMetrics = fleetMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFleetMetricsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}