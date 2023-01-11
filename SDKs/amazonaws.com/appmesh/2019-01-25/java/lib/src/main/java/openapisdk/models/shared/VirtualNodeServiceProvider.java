package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualNodeServiceProvider
 * An object that represents a virtual node service provider.
**/
public class VirtualNodeServiceProvider {
    @JsonProperty("virtualNodeName")
    public String virtualNodeName;
    public VirtualNodeServiceProvider withVirtualNodeName(String virtualNodeName) {
        this.virtualNodeName = virtualNodeName;
        return this;
    }
}