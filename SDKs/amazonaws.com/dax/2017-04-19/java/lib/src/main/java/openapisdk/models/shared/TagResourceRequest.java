package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("ResourceName")
    public String resourceName;
    public TagResourceRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}