package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfirmPrivateVirtualInterfaceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public ConfirmPrivateVirtualInterfaceRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGatewayId")
    public String virtualGatewayId;
    public ConfirmPrivateVirtualInterfaceRequest withVirtualGatewayId(String virtualGatewayId) {
        this.virtualGatewayId = virtualGatewayId;
        return this;
    }
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public ConfirmPrivateVirtualInterfaceRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}