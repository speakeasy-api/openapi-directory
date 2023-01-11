package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceInput {
    @JsonProperty("Resource")
    public String resource;
    public TagResourceInput withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}