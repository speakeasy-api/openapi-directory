package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTagsRequest {
    @JsonProperty("configurationIds")
    public String[] configurationIds;
    public CreateTagsRequest withConfigurationIds(String[] configurationIds) {
        this.configurationIds = configurationIds;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateTagsRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}