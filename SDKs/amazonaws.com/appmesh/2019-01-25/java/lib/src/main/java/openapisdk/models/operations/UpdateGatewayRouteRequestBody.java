package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGatewayRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateGatewayRouteRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public UpdateGatewayRouteRequestBodySpec spec;
    public UpdateGatewayRouteRequestBody withSpec(UpdateGatewayRouteRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}