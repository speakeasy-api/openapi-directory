package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortProbeAction
 * Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
**/
public class PortProbeAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocked")
    public Boolean blocked;
    public PortProbeAction withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortProbeDetails")
    public PortProbeDetail[] portProbeDetails;
    public PortProbeAction withPortProbeDetails(PortProbeDetail[] portProbeDetails) {
        this.portProbeDetails = portProbeDetails;
        return this;
    }
}