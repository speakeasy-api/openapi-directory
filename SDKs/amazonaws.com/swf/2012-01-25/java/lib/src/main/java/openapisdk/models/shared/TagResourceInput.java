package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceInput {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public TagResourceInput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("tags")
    public ResourceTag[] tags;
    public TagResourceInput withTags(ResourceTag[] tags) {
        this.tags = tags;
        return this;
    }
}