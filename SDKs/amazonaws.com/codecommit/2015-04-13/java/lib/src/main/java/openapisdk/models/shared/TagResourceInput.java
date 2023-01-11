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
    public java.util.Map<String, String> tags;
    public TagResourceInput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}