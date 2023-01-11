package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualNodeRequestBodySpec
 * An object representing the specification of a virtual node.
**/
public class CreateVirtualNodeRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public String[] backends;
    public CreateVirtualNodeRequestBodySpec withBackends(String[] backends) {
        this.backends = backends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.Listener[] listeners;
    public CreateVirtualNodeRequestBodySpec withListeners(openapisdk.models.shared.Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDiscovery")
    public openapisdk.models.shared.ServiceDiscovery serviceDiscovery;
    public CreateVirtualNodeRequestBodySpec withServiceDiscovery(openapisdk.models.shared.ServiceDiscovery serviceDiscovery) {
        this.serviceDiscovery = serviceDiscovery;
        return this;
    }
}