package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public TagResourceRequest withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}