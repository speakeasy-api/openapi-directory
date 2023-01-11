package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDirectConnectGatewayResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGateway")
    public DirectConnectGateway directConnectGateway;
    public DeleteDirectConnectGatewayResult withDirectConnectGateway(DirectConnectGateway directConnectGateway) {
        this.directConnectGateway = directConnectGateway;
        return this;
    }
}