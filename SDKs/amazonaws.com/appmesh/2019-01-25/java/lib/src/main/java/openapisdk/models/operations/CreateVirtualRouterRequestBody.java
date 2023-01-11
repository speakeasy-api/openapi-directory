package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVirtualRouterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateVirtualRouterRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("spec")
    public CreateVirtualRouterRequestBodySpec spec;
    public CreateVirtualRouterRequestBody withSpec(CreateVirtualRouterRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.TagRef[] tags;
    public CreateVirtualRouterRequestBody withTags(openapisdk.models.shared.TagRef[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("virtualRouterName")
    public String virtualRouterName;
    public CreateVirtualRouterRequestBody withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}