package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenTunnelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OpenTunnelRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfig")
    public DestinationConfig destinationConfig;
    public OpenTunnelRequest withDestinationConfig(DestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public OpenTunnelRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public TimeoutConfig timeoutConfig;
    public OpenTunnelRequest withTimeoutConfig(TimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}