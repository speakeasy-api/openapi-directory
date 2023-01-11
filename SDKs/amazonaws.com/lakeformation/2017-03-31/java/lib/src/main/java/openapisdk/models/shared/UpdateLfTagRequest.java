package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLfTagRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateLfTagRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("TagKey")
    public String tagKey;
    public UpdateLfTagRequest withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagValuesToAdd")
    public String[] tagValuesToAdd;
    public UpdateLfTagRequest withTagValuesToAdd(String[] tagValuesToAdd) {
        this.tagValuesToAdd = tagValuesToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagValuesToDelete")
    public String[] tagValuesToDelete;
    public UpdateLfTagRequest withTagValuesToDelete(String[] tagValuesToDelete) {
        this.tagValuesToDelete = tagValuesToDelete;
        return this;
    }
}