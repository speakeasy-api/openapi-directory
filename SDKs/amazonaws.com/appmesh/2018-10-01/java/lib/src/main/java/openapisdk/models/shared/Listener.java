package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Listener
 * An object representing a listener for a virtual node.
**/
public class Listener {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public HealthCheckPolicy healthCheck;
    public Listener withHealthCheck(HealthCheckPolicy healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portMapping")
    public PortMapping portMapping;
    public Listener withPortMapping(PortMapping portMapping) {
        this.portMapping = portMapping;
        return this;
    }
}