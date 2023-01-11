package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourcesDeleteResourcesRequestBody {
    @JsonProperty("resources")
    public String[] resources;
    public DeleteResourcesDeleteResourcesRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}