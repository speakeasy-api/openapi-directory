package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitialVersion")
    public CreateGroupRequestBodyInitialVersion initialVersion;
    public CreateGroupRequestBody withInitialVersion(CreateGroupRequestBodyInitialVersion initialVersion) {
        this.initialVersion = initialVersion;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateGroupRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateGroupRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}