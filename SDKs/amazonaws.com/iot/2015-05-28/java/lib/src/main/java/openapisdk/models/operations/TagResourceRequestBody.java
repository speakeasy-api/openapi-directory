package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public TagResourceRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public TagResourceRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}