package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public TagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagList")
    public Tag[] tagList;
    public TagResourceRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}