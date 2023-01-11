package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualServiceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateVirtualServiceRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public UpdateVirtualServiceRequestBodySpec spec;
    public UpdateVirtualServiceRequestBody withSpec(UpdateVirtualServiceRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}