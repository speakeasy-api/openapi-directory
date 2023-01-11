package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConfirmTransitVirtualInterfaceRequest {
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public ConfirmTransitVirtualInterfaceRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public ConfirmTransitVirtualInterfaceRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}