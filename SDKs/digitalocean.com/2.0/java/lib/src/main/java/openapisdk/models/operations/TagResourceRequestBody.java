package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("resources")
    public Object[] resources;
    public TagResourceRequestBody withResources(Object[] resources) {
        this.resources = resources;
        return this;
    }
}