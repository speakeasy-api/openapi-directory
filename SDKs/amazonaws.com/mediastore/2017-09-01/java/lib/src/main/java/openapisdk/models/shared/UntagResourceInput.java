package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceInput {
    @JsonProperty("Resource")
    public String resource;
    public UntagResourceInput withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}