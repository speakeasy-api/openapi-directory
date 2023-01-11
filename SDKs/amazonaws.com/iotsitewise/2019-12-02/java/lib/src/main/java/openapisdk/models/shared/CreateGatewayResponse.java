package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGatewayResponse {
    @JsonProperty("gatewayArn")
    public String gatewayArn;
    public CreateGatewayResponse withGatewayArn(String gatewayArn) {
        this.gatewayArn = gatewayArn;
        return this;
    }
    @JsonProperty("gatewayId")
    public String gatewayId;
    public CreateGatewayResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}