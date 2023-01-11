package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionLocalPortDetails
 * For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action.
**/
public class ActionLocalPortDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public ActionLocalPortDetails withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortName")
    public String portName;
    public ActionLocalPortDetails withPortName(String portName) {
        this.portName = portName;
        return this;
    }
}