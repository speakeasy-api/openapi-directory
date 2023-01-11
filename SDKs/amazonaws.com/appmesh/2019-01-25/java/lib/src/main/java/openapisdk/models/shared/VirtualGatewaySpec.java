package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewaySpec
 * An object that represents the specification of a service mesh resource.
**/
public class VirtualGatewaySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendDefaults")
    public VirtualGatewayBackendDefaults backendDefaults;
    public VirtualGatewaySpec withBackendDefaults(VirtualGatewayBackendDefaults backendDefaults) {
        this.backendDefaults = backendDefaults;
        return this;
    }
    @JsonProperty("listeners")
    public VirtualGatewayListener[] listeners;
    public VirtualGatewaySpec withListeners(VirtualGatewayListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public VirtualGatewayLogging logging;
    public VirtualGatewaySpec withLogging(VirtualGatewayLogging logging) {
        this.logging = logging;
        return this;
    }
}