package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVirtualNodeRequestBodySpec
 * An object that represents the specification of a virtual node.
**/
public class UpdateVirtualNodeRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendDefaults")
    public openapisdk.models.shared.BackendDefaults backendDefaults;
    public UpdateVirtualNodeRequestBodySpec withBackendDefaults(openapisdk.models.shared.BackendDefaults backendDefaults) {
        this.backendDefaults = backendDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public openapisdk.models.shared.Backend[] backends;
    public UpdateVirtualNodeRequestBodySpec withBackends(openapisdk.models.shared.Backend[] backends) {
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
    @JsonProperty("logging")
    public openapisdk.models.shared.Logging logging;
    public UpdateVirtualNodeRequestBodySpec withLogging(openapisdk.models.shared.Logging logging) {
        this.logging = logging;
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