package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveLfTagsFromResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public RemoveLfTagsFromResourceRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("LFTags")
    public LfTagPair[] lfTags;
    public RemoveLfTagsFromResourceRequest withLfTags(LfTagPair[] lfTags) {
        this.lfTags = lfTags;
        return this;
    }
    @JsonProperty("Resource")
    public Resource resource;
    public RemoveLfTagsFromResourceRequest withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}