package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public TagResourceInput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}