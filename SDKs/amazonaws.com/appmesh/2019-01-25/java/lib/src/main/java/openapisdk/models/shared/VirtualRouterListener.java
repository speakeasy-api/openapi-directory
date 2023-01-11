package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualRouterListener
 * An object that represents a virtual router listener.
**/
public class VirtualRouterListener {
    @JsonProperty("portMapping")
    public PortMapping portMapping;
    public VirtualRouterListener withPortMapping(PortMapping portMapping) {
        this.portMapping = portMapping;
        return this;
    }
}