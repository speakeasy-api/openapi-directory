package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTagsRequestBody {
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateTagsRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}