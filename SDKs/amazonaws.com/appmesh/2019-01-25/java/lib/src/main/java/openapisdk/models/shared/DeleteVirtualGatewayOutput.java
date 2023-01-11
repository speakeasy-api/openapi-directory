package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVirtualGatewayOutput {
    @JsonProperty("virtualGateway")
    public VirtualGatewayData virtualGateway;
    public DeleteVirtualGatewayOutput withVirtualGateway(VirtualGatewayData virtualGateway) {
        this.virtualGateway = virtualGateway;
        return this;
    }
}