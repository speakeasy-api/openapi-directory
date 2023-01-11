package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateListenerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientAffinity")
    public ClientAffinityEnum clientAffinity;
    public UpdateListenerRequest withClientAffinity(ClientAffinityEnum clientAffinity) {
        this.clientAffinity = clientAffinity;
        return this;
    }
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public UpdateListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public UpdateListenerRequest withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public ProtocolEnum protocol;
    public UpdateListenerRequest withProtocol(ProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}