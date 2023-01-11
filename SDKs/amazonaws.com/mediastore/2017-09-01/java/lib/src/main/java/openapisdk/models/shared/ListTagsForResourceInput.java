package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceInput {
    @JsonProperty("Resource")
    public String resource;
    public ListTagsForResourceInput withResource(String resource) {
        this.resource = resource;
        return this;
    }
}