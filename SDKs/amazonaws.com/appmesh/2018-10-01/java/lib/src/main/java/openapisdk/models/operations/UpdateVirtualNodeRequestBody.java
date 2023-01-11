package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualNodeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateVirtualNodeRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public UpdateVirtualNodeRequestBodySpec spec;
    public UpdateVirtualNodeRequestBody withSpec(UpdateVirtualNodeRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}