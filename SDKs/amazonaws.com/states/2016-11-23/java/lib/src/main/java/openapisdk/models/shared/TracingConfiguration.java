package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TracingConfiguration
 * Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code> 
**/
public class TracingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public TracingConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}