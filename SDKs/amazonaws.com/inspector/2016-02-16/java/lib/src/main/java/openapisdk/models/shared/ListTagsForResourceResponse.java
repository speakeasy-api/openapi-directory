package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceResponse {
    @JsonProperty("tags")
    public Tag[] tags;
    public ListTagsForResourceResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}