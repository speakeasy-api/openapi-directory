package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("tags")
    public openapisdk.models.shared.TagRef[] tags;
    public TagResourceRequestBody withTags(openapisdk.models.shared.TagRef[] tags) {
        this.tags = tags;
        return this;
    }
}