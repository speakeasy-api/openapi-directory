package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Listener
 * A complex type for a listener.
**/
public class Listener {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientAffinity")
    public ClientAffinityEnum clientAffinity;
    public Listener withClientAffinity(ClientAffinityEnum clientAffinity) {
        this.clientAffinity = clientAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public Listener withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public Listener withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public ProtocolEnum protocol;
    public Listener withProtocol(ProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}