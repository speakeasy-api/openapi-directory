package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteLfTagRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeleteLfTagRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("TagKey")
    public String tagKey;
    public DeleteLfTagRequest withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
}