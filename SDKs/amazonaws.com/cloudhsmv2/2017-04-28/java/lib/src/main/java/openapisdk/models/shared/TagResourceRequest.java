package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public TagResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagList")
    public Tag[] tagList;
    public TagResourceRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}