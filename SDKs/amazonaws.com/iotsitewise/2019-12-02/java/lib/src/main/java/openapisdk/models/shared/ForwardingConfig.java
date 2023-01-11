package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ForwardingConfig
 * The forwarding configuration for a given property.
**/
public class ForwardingConfig {
    @JsonProperty("state")
    public ForwardingConfigStateEnum state;
    public ForwardingConfig withState(ForwardingConfigStateEnum state) {
        this.state = state;
        return this;
    }
}