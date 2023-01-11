package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoRollbackConfiguration
 * Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
**/
public class AutoRollbackConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public AutoRollbackConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public AutoRollbackEventEnum[] events;
    public AutoRollbackConfiguration withEvents(AutoRollbackEventEnum[] events) {
        this.events = events;
        return this;
    }
}