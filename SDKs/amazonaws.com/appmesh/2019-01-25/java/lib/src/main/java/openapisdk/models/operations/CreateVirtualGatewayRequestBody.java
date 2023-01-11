package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVirtualGatewayRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateVirtualGatewayRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public CreateVirtualGatewayRequestBodySpec spec;
    public CreateVirtualGatewayRequestBody withSpec(CreateVirtualGatewayRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.TagRef[] tags;
    public CreateVirtualGatewayRequestBody withTags(openapisdk.models.shared.TagRef[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("virtualGatewayName")
    public String virtualGatewayName;
    public CreateVirtualGatewayRequestBody withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}