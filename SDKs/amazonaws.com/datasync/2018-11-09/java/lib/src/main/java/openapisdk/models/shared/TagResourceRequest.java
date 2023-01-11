package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagResourceRequest
 * TagResourceRequest
**/
public class TagResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public TagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("Tags")
    public TagListEntry[] tags;
    public TagResourceRequest withTags(TagListEntry[] tags) {
        this.tags = tags;
        return this;
    }
}