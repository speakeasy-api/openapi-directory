package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualNodeSpec
 * An object representing the specification of a virtual node.
**/
public class VirtualNodeSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public String[] backends;
    public VirtualNodeSpec withBackends(String[] backends) {
        this.backends = backends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public Listener[] listeners;
    public VirtualNodeSpec withListeners(Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDiscovery")
    public ServiceDiscovery serviceDiscovery;
    public VirtualNodeSpec withServiceDiscovery(ServiceDiscovery serviceDiscovery) {
        this.serviceDiscovery = serviceDiscovery;
        return this;
    }
}