package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectorDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitialVersion")
    public CreateConnectorDefinitionRequestBodyInitialVersion initialVersion;
    public CreateConnectorDefinitionRequestBody withInitialVersion(CreateConnectorDefinitionRequestBodyInitialVersion initialVersion) {
        this.initialVersion = initialVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateConnectorDefinitionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateConnectorDefinitionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}