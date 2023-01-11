package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualGatewayRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateVirtualGatewayRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public UpdateVirtualGatewayRequestBodySpec spec;
    public UpdateVirtualGatewayRequestBody withSpec(UpdateVirtualGatewayRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}