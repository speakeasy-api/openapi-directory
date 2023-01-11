package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectConnectGatewayAssociationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociation")
    public DirectConnectGatewayAssociation directConnectGatewayAssociation;
    public CreateDirectConnectGatewayAssociationResult withDirectConnectGatewayAssociation(DirectConnectGatewayAssociation directConnectGatewayAssociation) {
        this.directConnectGatewayAssociation = directConnectGatewayAssociation;
        return this;
    }
}