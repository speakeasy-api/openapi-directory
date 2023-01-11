package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVirtualNodeRequestBodySpec
 * An object representing the specification of a virtual node.
**/
public class UpdateVirtualNodeRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public String[] backends;
    public UpdateVirtualNodeRequestBodySpec withBackends(String[] backends) {
        this.backends = backends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.Listener[] listeners;
    public UpdateVirtualNodeRequestBodySpec withListeners(openapisdk.models.shared.Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDiscovery")
    public openapisdk.models.shared.ServiceDiscovery serviceDiscovery;
    public UpdateVirtualNodeRequestBodySpec withServiceDiscovery(openapisdk.models.shared.ServiceDiscovery serviceDiscovery) {
        this.serviceDiscovery = serviceDiscovery;
        return this;
    }
}