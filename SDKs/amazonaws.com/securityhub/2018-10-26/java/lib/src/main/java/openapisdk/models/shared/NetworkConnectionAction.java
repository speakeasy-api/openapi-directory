package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConnectionAction
 * Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
**/
public class NetworkConnectionAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocked")
    public Boolean blocked;
    public NetworkConnectionAction withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionDirection")
    public String connectionDirection;
    public NetworkConnectionAction withConnectionDirection(String connectionDirection) {
        this.connectionDirection = connectionDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalPortDetails")
    public ActionLocalPortDetails localPortDetails;
    public NetworkConnectionAction withLocalPortDetails(ActionLocalPortDetails localPortDetails) {
        this.localPortDetails = localPortDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public NetworkConnectionAction withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteIpDetails")
    public ActionRemoteIpDetails remoteIpDetails;
    public NetworkConnectionAction withRemoteIpDetails(ActionRemoteIpDetails remoteIpDetails) {
        this.remoteIpDetails = remoteIpDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemotePortDetails")
    public ActionRemotePortDetails remotePortDetails;
    public NetworkConnectionAction withRemotePortDetails(ActionRemotePortDetails remotePortDetails) {
        this.remotePortDetails = remotePortDetails;
        return this;
    }
}