package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGatewayRequestBody {
    @JsonProperty("gatewayName")
    public String gatewayName;
    public CreateGatewayRequestBody withGatewayName(String gatewayName) {
        this.gatewayName = gatewayName;
        return this;
    }
    @JsonProperty("gatewayPlatform")
    public CreateGatewayRequestBodyGatewayPlatform gatewayPlatform;
    public CreateGatewayRequestBody withGatewayPlatform(CreateGatewayRequestBodyGatewayPlatform gatewayPlatform) {
        this.gatewayPlatform = gatewayPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateGatewayRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}