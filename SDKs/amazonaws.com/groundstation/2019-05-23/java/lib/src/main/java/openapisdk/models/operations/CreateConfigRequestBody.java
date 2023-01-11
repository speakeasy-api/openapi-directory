package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConfigRequestBody {
    @JsonProperty("configData")
    public CreateConfigRequestBodyConfigData configData;
    public CreateConfigRequestBody withConfigData(CreateConfigRequestBodyConfigData configData) {
        this.configData = configData;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateConfigRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateConfigRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}