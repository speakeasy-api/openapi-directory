package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateVirtualGatewayOutput {
    @JsonProperty("virtualGateway")
    public VirtualGatewayData virtualGateway;
    public CreateVirtualGatewayOutput withVirtualGateway(VirtualGatewayData virtualGateway) {
        this.virtualGateway = virtualGateway;
        return this;
    }
}