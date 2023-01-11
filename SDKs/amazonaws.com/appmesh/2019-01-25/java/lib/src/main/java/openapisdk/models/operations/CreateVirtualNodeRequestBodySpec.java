package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualNodeRequestBodySpec
 * An object that represents the specification of a virtual node.
**/
public class CreateVirtualNodeRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendDefaults")
    public openapisdk.models.shared.BackendDefaults backendDefaults;
    public CreateVirtualNodeRequestBodySpec withBackendDefaults(openapisdk.models.shared.BackendDefaults backendDefaults) {
        this.backendDefaults = backendDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public openapisdk.models.shared.Backend[] backends;
    public CreateVirtualNodeRequestBodySpec withBackends(openapisdk.models.shared.Backend[] backends) {
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
    @JsonProperty("logging")
    public openapisdk.models.shared.Logging logging;
    public CreateVirtualNodeRequestBodySpec withLogging(openapisdk.models.shared.Logging logging) {
        this.logging = logging;
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