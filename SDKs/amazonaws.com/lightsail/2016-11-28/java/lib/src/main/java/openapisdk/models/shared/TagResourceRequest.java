package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public TagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public TagResourceRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}