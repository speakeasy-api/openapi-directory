package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCustomRoutingListenerRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public UpdateCustomRoutingListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public UpdateCustomRoutingListenerRequest withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
}