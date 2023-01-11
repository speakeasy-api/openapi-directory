package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayBackendDefaults
 * An object that represents the default properties for a backend.
**/
public class VirtualGatewayBackendDefaults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientPolicy")
    public VirtualGatewayClientPolicy clientPolicy;
    public VirtualGatewayBackendDefaults withClientPolicy(VirtualGatewayClientPolicy clientPolicy) {
        this.clientPolicy = clientPolicy;
        return this;
    }
}