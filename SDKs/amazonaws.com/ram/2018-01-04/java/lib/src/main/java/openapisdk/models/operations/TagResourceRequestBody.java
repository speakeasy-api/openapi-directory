package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public TagResourceRequestBody withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public TagResourceRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}