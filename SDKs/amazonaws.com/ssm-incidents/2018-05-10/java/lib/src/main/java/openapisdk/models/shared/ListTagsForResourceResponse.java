package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceResponse {
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ListTagsForResourceResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}