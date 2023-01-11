package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGatewayRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateGatewayRouteRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("gatewayRouteName")
    public String gatewayRouteName;
    public CreateGatewayRouteRequestBody withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @JsonProperty("spec")
    public CreateGatewayRouteRequestBodySpec spec;
    public CreateGatewayRouteRequestBody withSpec(CreateGatewayRouteRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.TagRef[] tags;
    public CreateGatewayRouteRequestBody withTags(openapisdk.models.shared.TagRef[] tags) {
        this.tags = tags;
        return this;
    }
}