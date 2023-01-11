package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetTagsForResourceRequest {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public SetTagsForResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public SetTagsForResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}