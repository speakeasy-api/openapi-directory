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
    public Tag[] tags;
    public TagResourceInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}