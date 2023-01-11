package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomRoutingListener
 * A complex type for a listener for a custom routing accelerator.
**/
public class CustomRoutingListener {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public CustomRoutingListener withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public CustomRoutingListener withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
}