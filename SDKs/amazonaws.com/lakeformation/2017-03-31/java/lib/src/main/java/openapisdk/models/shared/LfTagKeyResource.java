package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LfTagKeyResource
 * A structure containing a tag key and values for a resource.
**/
public class LfTagKeyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public LfTagKeyResource withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("TagKey")
    public String tagKey;
    public LfTagKeyResource withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonProperty("TagValues")
    public String[] tagValues;
    public LfTagKeyResource withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}