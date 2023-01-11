package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDirectConnectGatewayAssociationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationId")
    public String associationId;
    public DeleteDirectConnectGatewayAssociationRequest withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DeleteDirectConnectGatewayAssociationRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGatewayId")
    public String virtualGatewayId;
    public DeleteDirectConnectGatewayAssociationRequest withVirtualGatewayId(String virtualGatewayId) {
        this.virtualGatewayId = virtualGatewayId;
        return this;
    }
}