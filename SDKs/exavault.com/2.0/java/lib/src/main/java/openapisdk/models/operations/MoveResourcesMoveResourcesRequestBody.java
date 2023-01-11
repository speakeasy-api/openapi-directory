package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MoveResourcesMoveResourcesRequestBody {
    @JsonProperty("parentResource")
    public String parentResource;
    public MoveResourcesMoveResourcesRequestBody withParentResource(String parentResource) {
        this.parentResource = parentResource;
        return this;
    }
    @JsonProperty("resources")
    public String[] resources;
    public MoveResourcesMoveResourcesRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}