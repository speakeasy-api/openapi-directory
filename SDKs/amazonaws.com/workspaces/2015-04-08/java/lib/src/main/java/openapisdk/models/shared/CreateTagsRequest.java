package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTagsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public CreateTagsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateTagsRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}