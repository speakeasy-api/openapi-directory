package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveTagsFromVaultRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public RemoveTagsFromVaultRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}