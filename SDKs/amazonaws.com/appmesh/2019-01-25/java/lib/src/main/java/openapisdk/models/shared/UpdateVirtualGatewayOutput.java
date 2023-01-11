package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateVirtualGatewayOutput {
    @JsonProperty("virtualGateway")
    public VirtualGatewayData virtualGateway;
    public UpdateVirtualGatewayOutput withVirtualGateway(VirtualGatewayData virtualGateway) {
        this.virtualGateway = virtualGateway;
        return this;
    }
}