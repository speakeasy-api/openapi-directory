package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLfTagResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetLfTagResponse withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagKey")
    public String tagKey;
    public GetLfTagResponse withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagValues")
    public String[] tagValues;
    public GetLfTagResponse withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}