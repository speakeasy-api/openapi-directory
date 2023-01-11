package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGatewayRequestBody {
    @JsonProperty("gatewayName")
    public String gatewayName;
    public UpdateGatewayRequestBody withGatewayName(String gatewayName) {
        this.gatewayName = gatewayName;
        return this;
    }
}