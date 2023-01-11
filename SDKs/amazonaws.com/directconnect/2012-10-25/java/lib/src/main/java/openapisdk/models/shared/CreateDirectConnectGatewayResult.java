package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectConnectGatewayResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGateway")
    public DirectConnectGateway directConnectGateway;
    public CreateDirectConnectGatewayResult withDirectConnectGateway(DirectConnectGateway directConnectGateway) {
        this.directConnectGateway = directConnectGateway;
        return this;
    }
}