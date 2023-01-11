package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionRemotePortDetails
 * Provides information about the remote port that was involved in an attempted network connection.
**/
public class ActionRemotePortDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public ActionRemotePortDetails withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortName")
    public String portName;
    public ActionRemotePortDetails withPortName(String portName) {
        this.portName = portName;
        return this;
    }
}