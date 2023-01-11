package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddTagsToVaultRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public AddTagsToVaultRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}