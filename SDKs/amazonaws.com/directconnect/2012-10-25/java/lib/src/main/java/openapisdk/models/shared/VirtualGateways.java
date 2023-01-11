package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualGateways {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGateways")
    public VirtualGateway[] virtualGateways;
    public VirtualGateways withVirtualGateways(VirtualGateway[] virtualGateways) {
        this.virtualGateways = virtualGateways;
        return this;
    }
}