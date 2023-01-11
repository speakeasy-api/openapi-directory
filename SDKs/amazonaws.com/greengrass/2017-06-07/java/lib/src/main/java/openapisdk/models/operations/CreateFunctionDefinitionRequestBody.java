package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFunctionDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitialVersion")
    public CreateFunctionDefinitionRequestBodyInitialVersion initialVersion;
    public CreateFunctionDefinitionRequestBody withInitialVersion(CreateFunctionDefinitionRequestBodyInitialVersion initialVersion) {
        this.initialVersion = initialVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateFunctionDefinitionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateFunctionDefinitionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}