package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDirectConnectGatewayRequest {
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DeleteDirectConnectGatewayRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
}