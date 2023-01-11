package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualRouterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateVirtualRouterRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public UpdateVirtualRouterRequestBodySpec spec;
    public UpdateVirtualRouterRequestBody withSpec(UpdateVirtualRouterRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}