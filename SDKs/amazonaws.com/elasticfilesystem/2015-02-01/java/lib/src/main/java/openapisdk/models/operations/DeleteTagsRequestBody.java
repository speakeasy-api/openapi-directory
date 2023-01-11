package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTagsRequestBody {
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public DeleteTagsRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}