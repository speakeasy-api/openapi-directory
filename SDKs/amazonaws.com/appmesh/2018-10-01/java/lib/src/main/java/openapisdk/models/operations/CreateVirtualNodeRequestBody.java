package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVirtualNodeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateVirtualNodeRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public CreateVirtualNodeRequestBodySpec spec;
    public CreateVirtualNodeRequestBody withSpec(CreateVirtualNodeRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("virtualNodeName")
    public String virtualNodeName;
    public CreateVirtualNodeRequestBody withVirtualNodeName(String virtualNodeName) {
        this.virtualNodeName = virtualNodeName;
        return this;
    }
}