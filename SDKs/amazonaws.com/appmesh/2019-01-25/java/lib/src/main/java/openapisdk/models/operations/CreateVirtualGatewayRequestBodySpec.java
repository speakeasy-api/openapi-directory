package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualGatewayRequestBodySpec
 * An object that represents the specification of a service mesh resource.
**/
public class CreateVirtualGatewayRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendDefaults")
    public openapisdk.models.shared.VirtualGatewayBackendDefaults backendDefaults;
    public CreateVirtualGatewayRequestBodySpec withBackendDefaults(openapisdk.models.shared.VirtualGatewayBackendDefaults backendDefaults) {
        this.backendDefaults = backendDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.VirtualGatewayListener[] listeners;
    public CreateVirtualGatewayRequestBodySpec withListeners(openapisdk.models.shared.VirtualGatewayListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public openapisdk.models.shared.VirtualGatewayLogging logging;
    public CreateVirtualGatewayRequestBodySpec withLogging(openapisdk.models.shared.VirtualGatewayLogging logging) {
        this.logging = logging;
        return this;
    }
}