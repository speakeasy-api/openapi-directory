package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsToResourceRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public AddTagsToResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public AddTagsToResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}