package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoggerDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitialVersion")
    public CreateLoggerDefinitionRequestBodyInitialVersion initialVersion;
    public CreateLoggerDefinitionRequestBody withInitialVersion(CreateLoggerDefinitionRequestBodyInitialVersion initialVersion) {
        this.initialVersion = initialVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateLoggerDefinitionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateLoggerDefinitionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}