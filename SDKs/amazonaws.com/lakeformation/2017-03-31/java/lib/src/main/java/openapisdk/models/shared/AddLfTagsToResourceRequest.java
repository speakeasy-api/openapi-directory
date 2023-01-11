package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddLfTagsToResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public AddLfTagsToResourceRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("LFTags")
    public LfTagPair[] lfTags;
    public AddLfTagsToResourceRequest withLfTags(LfTagPair[] lfTags) {
        this.lfTags = lfTags;
        return this;
    }
    @JsonProperty("Resource")
    public Resource resource;
    public AddLfTagsToResourceRequest withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}