package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscoverPollEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public DiscoverPollEndpointResponse withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetryEndpoint")
    public String telemetryEndpoint;
    public DiscoverPollEndpointResponse withTelemetryEndpoint(String telemetryEndpoint) {
        this.telemetryEndpoint = telemetryEndpoint;
        return this;
    }
}