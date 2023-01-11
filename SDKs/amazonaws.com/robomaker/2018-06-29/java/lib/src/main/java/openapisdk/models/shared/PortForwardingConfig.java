package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortForwardingConfig
 * Configuration information for port forwarding.
**/
public class PortForwardingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portMappings")
    public PortMapping[] portMappings;
    public PortForwardingConfig withPortMappings(PortMapping[] portMappings) {
        this.portMappings = portMappings;
        return this;
    }
}