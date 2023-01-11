package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorldGenerationJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateWorldGenerationJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateWorldGenerationJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("template")
    public String template;
    public CreateWorldGenerationJobRequestBody withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonProperty("worldCount")
    public CreateWorldGenerationJobRequestBodyWorldCount worldCount;
    public CreateWorldGenerationJobRequestBody withWorldCount(CreateWorldGenerationJobRequestBodyWorldCount worldCount) {
        this.worldCount = worldCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worldTags")
    public java.util.Map<String, String> worldTags;
    public CreateWorldGenerationJobRequestBody withWorldTags(java.util.Map<String, String> worldTags) {
        this.worldTags = worldTags;
        return this;
    }
}