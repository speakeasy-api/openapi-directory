package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceResponse {
    @JsonProperty("TagList")
    public Tag[] tagList;
    public ListTagsForResourceResponse withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}