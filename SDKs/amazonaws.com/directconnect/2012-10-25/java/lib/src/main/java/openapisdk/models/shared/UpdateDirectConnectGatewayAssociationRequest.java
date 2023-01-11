package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDirectConnectGatewayAssociationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addAllowedPrefixesToDirectConnectGateway")
    public RouteFilterPrefix[] addAllowedPrefixesToDirectConnectGateway;
    public UpdateDirectConnectGatewayAssociationRequest withAddAllowedPrefixesToDirectConnectGateway(RouteFilterPrefix[] addAllowedPrefixesToDirectConnectGateway) {
        this.addAllowedPrefixesToDirectConnectGateway = addAllowedPrefixesToDirectConnectGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationId")
    public String associationId;
    public UpdateDirectConnectGatewayAssociationRequest withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeAllowedPrefixesToDirectConnectGateway")
    public RouteFilterPrefix[] removeAllowedPrefixesToDirectConnectGateway;
    public UpdateDirectConnectGatewayAssociationRequest withRemoveAllowedPrefixesToDirectConnectGateway(RouteFilterPrefix[] removeAllowedPrefixesToDirectConnectGateway) {
        this.removeAllowedPrefixesToDirectConnectGateway = removeAllowedPrefixesToDirectConnectGateway;
        return this;
    }
}