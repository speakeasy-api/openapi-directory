package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLfTagRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public CreateLfTagRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("TagKey")
    public String tagKey;
    public CreateLfTagRequest withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonProperty("TagValues")
    public String[] tagValues;
    public CreateLfTagRequest withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}