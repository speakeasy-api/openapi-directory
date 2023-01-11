package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceResponse {
    @JsonProperty("Tags")
    public Tag[] tags;
    public ListTagsForResourceResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}