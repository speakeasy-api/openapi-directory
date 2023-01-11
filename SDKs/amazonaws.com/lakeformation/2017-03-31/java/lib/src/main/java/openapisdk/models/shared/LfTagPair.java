package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LfTagPair
 * A structure containing a tag key-value pair.
**/
public class LfTagPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public LfTagPair withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("TagKey")
    public String tagKey;
    public LfTagPair withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonProperty("TagValues")
    public String[] tagValues;
    public LfTagPair withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}