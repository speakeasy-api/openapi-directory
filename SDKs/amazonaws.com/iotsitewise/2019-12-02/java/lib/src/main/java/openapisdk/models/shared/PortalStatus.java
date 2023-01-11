package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortalStatus
 * Contains information about the current status of a portal.
**/
public class PortalStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public MonitorErrorDetails error;
    public PortalStatus withError(MonitorErrorDetails error) {
        this.error = error;
        return this;
    }
    @JsonProperty("state")
    public PortalStateEnum state;
    public PortalStatus withState(PortalStateEnum state) {
        this.state = state;
        return this;
    }
}