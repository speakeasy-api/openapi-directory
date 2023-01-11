package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceLfTagsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetResourceLfTagsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("Resource")
    public Resource resource;
    public GetResourceLfTagsRequest withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowAssignedLFTags")
    public Boolean showAssignedLFTags;
    public GetResourceLfTagsRequest withShowAssignedLfTags(Boolean showAssignedLFTags) {
        this.showAssignedLFTags = showAssignedLFTags;
        return this;
    }
}