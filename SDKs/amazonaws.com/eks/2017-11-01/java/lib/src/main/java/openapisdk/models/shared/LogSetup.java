package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogSetup
 * An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
**/
public class LogSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public LogSetup withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public LogTypeEnum[] types;
    public LogSetup withTypes(LogTypeEnum[] types) {
        this.types = types;
        return this;
    }
}