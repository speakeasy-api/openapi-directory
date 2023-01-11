package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVirtualGatewayRequestBodySpec
 * An object that represents the specification of a service mesh resource.
**/
public class UpdateVirtualGatewayRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendDefaults")
    public openapisdk.models.shared.VirtualGatewayBackendDefaults backendDefaults;
    public UpdateVirtualGatewayRequestBodySpec withBackendDefaults(openapisdk.models.shared.VirtualGatewayBackendDefaults backendDefaults) {
        this.backendDefaults = backendDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.VirtualGatewayListener[] listeners;
    public UpdateVirtualGatewayRequestBodySpec withListeners(openapisdk.models.shared.VirtualGatewayListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public openapisdk.models.shared.VirtualGatewayLogging logging;
    public UpdateVirtualGatewayRequestBodySpec withLogging(openapisdk.models.shared.VirtualGatewayLogging logging) {
        this.logging = logging;
        return this;
    }
}