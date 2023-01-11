package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public TagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}