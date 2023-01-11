package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDirectConnectGatewayAssociationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociation")
    public DirectConnectGatewayAssociation directConnectGatewayAssociation;
    public UpdateDirectConnectGatewayAssociationResult withDirectConnectGatewayAssociation(DirectConnectGatewayAssociation directConnectGatewayAssociation) {
        this.directConnectGatewayAssociation = directConnectGatewayAssociation;
        return this;
    }
}