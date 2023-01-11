package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsToResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public AddTagsToResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagList")
    public Tag[] tagList;
    public AddTagsToResourceRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}