package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDirectConnectGatewayAssociationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociation")
    public DirectConnectGatewayAssociation directConnectGatewayAssociation;
    public DeleteDirectConnectGatewayAssociationResult withDirectConnectGatewayAssociation(DirectConnectGatewayAssociation directConnectGatewayAssociation) {
        this.directConnectGatewayAssociation = directConnectGatewayAssociation;
        return this;
    }
}