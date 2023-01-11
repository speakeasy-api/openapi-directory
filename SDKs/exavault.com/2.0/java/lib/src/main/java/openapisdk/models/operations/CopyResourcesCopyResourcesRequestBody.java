package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CopyResourcesCopyResourcesRequestBody {
    @JsonProperty("parentResource")
    public String parentResource;
    public CopyResourcesCopyResourcesRequestBody withParentResource(String parentResource) {
        this.parentResource = parentResource;
        return this;
    }
    @JsonProperty("resources")
    public String[] resources;
    public CopyResourcesCopyResourcesRequestBody withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}