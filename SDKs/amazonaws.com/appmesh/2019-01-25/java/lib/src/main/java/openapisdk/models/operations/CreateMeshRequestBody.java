package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMeshRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateMeshRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public CreateMeshRequestBody withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public CreateMeshRequestBodySpec spec;
    public CreateMeshRequestBody withSpec(CreateMeshRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.TagRef[] tags;
    public CreateMeshRequestBody withTags(openapisdk.models.shared.TagRef[] tags) {
        this.tags = tags;
        return this;
    }
}